import _ from 'lodash';
import { useEffect, useState } from 'react';
import { getErrMessages } from './handlers';

const requestState = {
  waiting: 'WAITING',
  success: 'SUCCESS',
  error: 'ERROR',
};

const defaultOptions = {
  isFile: false,
  bypass: false,
  noAuthPath: 'sign-in',
  onError: undefined,
  onForbidden: () => {},
};

export const useRequest = (requestFunction = () => new Promise(), entryOptions = {}) => {
  const options = _.merge(defaultOptions, entryOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const [errorResponse, setErrorResponse] = useState([]);
  const [status, setStatus] = useState(requestState.waiting);
  const [logger, setLogger] = useState('');

  useEffect(() => {
    if (status !== requestState.error && errorResponse.length < 1) return;
    const msg = errorResponse.join(' ');
    if (typeof options.onError === 'function') {
      options.onError(msg);
    } else {
      console.error(msg);
    }
  }, [status, errorResponse]);

  const makeRequest = async (...args) => {
    return new Promise((resolve) => {
      let isOk = false;
      let successContent;
      let errorContent;
      setStatus(requestState.waiting);
      setIsLoading(true);
      requestFunction(...args)
        .then((responseRequest) => {
          const resolveString = JSON.stringify(responseRequest, null, 3);
          setLogger(resolveString);
          if (!responseRequest || !_.has(responseRequest, 'success')) {
            isOk = false;
            successContent = undefined;
            setResponse(undefined);
          } else {
            const { success, data } = responseRequest;
            setResponse(data);
            successContent = data;
            isOk = success;
          }
          setStatus(requestState.success);
          errorContent = undefined;
          setErrorResponse([]);
        })
        .catch((error) => {
          console.log(error);
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            options.onForbidden(error);
          }
          let filteredError = {
            code: error.code,
            message: error.message,
            config: {
              baseURL: error?.config?.baseURL,
              url: error?.config?.url,
            },
          };
          if (error.response && error.response.data) {
            filteredError = {
              ...filteredError,
              data: error.response?.data,
            };
          }
          setStatus(requestState.error);
          const errMessages = getErrMessages(error);
          console.log(errMessages);
          setErrorResponse(errMessages);
          const rejectString = JSON.stringify(filteredError, null, 3);
          setLogger(rejectString);
          successContent = undefined;
          errorContent = filteredError;
          isOk = false;
        })
        .finally(() => {
          setIsLoading(false);
          resolve({ isOk, successContent, errorContent });
        });
    });
  };

  return { logger, makeRequest, isLoading, response, errorResponse, status };
};
