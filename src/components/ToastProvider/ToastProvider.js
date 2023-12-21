import React from 'react';
import { VARIANT_OPTIONS } from '../ToastPlayground/ToastPlayground';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasterMessages, setToasterMessages] = React.useState([]);

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
