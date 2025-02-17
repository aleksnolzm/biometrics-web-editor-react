import _ from 'lodash';
import { closeDialog, openDialog } from 'app/store/core/dialogSlice';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const useSimpleAlert = () => {
  const dispatch = useDispatch();

  const defaultOptions = {
    title: undefined,
    description: undefined,
    cancel: true,
  };

  const openAlert = (entryOptions) => {
    const options = _.merge(defaultOptions, entryOptions);
    return new Promise((resolve) => {
      dispatch(
        openDialog({
          children: (
            <>
              <DialogTitle id="alert-dialog-title">{options.title}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">{options.description}</DialogContentText>
              </DialogContent>
              <DialogActions>
                {options.cancel && (
                  <Button
                    onClick={() => {
                      dispatch(closeDialog());
                      resolve(false);
                    }}
                    color="primary"
                  >
                    Cancelar
                  </Button>
                )}
                <Button
                  onClick={() => {
                    dispatch(closeDialog());
                    resolve(true);
                  }}
                  color="warning"
                  autoFocus
                >
                  Aceptar
                </Button>
              </DialogActions>
            </>
          ),
        })
      );
    });
  };

  return openAlert;
};
