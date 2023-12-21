import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasterMessages } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasterMessages.map((message) => (
        <li key={message.id} className={styles.toastWrapper}>
          <Toast id={message.id} variant={message.variant}>
            {message.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
