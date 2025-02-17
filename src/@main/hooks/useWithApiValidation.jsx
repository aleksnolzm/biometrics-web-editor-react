import { useState } from 'react';

export const useWithApiValidation = (key, requestFunction = () => new Promise()) => {
  const [isUnique, setIsUnique] = useState(true);
  const [errorMessage, setErrorMessage] = useState(undefined);
  let timerId;

  const handleValidate = async (value = '') => {
    try {
      const { success, messages } = await requestFunction({ [key]: value });
      console.log(`success: ${success} \nmessage: ${messages[0]}`);
      setIsUnique(Boolean(success));
      const msg = !success && messages ? messages[0] : undefined;
      setErrorMessage(msg);
    } catch (error) {
      console.log(error);
      if (!error.response.status === 422) {
        setErrorMessage('Hubo un error al hacer la validación');
        setIsUnique(false);
      } else {
        const message = error.response.data.messages[0];
        setErrorMessage(message);
        setIsUnique(false);
      }
    }
  };

  const validateField = ({ target }) => {
    const { value } = target;
    if (value === undefined || value.length < 1) {
      return;
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      handleValidate(value);
    }, 300);
  };

  return { isUnique, errorMessage, validateField };
};
