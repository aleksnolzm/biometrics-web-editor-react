import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { showMessage } from 'app/store/core/messageSlice';

export const useErrorResponse = () => {
  const Dispatch = useDispatch();
  
  const showError = (error) => {
    console.log(error);
    let errCode = error.code;
    let errMessage = error.message;
    let color = 'primary';
    if (!_.has(error, 'response')) {
      errCode = error.code;
      errMessage = error.message;
    } else if (_.inRange(error.response.status, 499, 600)) {
      color = 'error';
      const errMsgExtract = error.response.data.messages
        ? error.response.data.messages[0]
        : error.response.data.message;
      errMessage = errMsgExtract;
      errCode = error.response.status;
    } else if (_.inRange(error.response.status, 400, 498)) {
      color = 'warning';
      const errMsgExtract = error.response.data.messages
        ? error.response.data.messages[0]
        : error.response.data.message;
      errMessage = errMsgExtract;
      errCode = error.response.status;
    }
    const message = `${errCode.toString()}: ${errMessage}`;
    Dispatch(
      showMessage({
        message,
        autoHideDuration: 4000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        variant: color,
      })
    );
    console.table(errMessage, errCode);
  };

  return showError;
};
