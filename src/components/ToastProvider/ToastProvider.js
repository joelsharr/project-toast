import React from 'react';
import { VARIANT_OPTIONS } from '../ToastPlayground/ToastPlayground';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasterMessages, setToasterMessages] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasterMessages([]);
  }, []);

  useEscapeKey(handleEscape);

  function addToasterMessage(message, variant) {
    const newMessages = [
      ...toasterMessages,
      {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      },
    ];
    setToasterMessages(newMessages);
  };

  function removeToasterMessage(id) {
    const newMessages = toasterMessages.filter((message) => message.id !== id);
    setToasterMessages(newMessages);
  }

  return <ToastContext.Provider value={{toasterMessages, addToasterMessage, removeToasterMessage}}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider;
