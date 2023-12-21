import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({messages, removeToaster}) {
  return (
    <ol className={styles.wrapper}>
      {messages.map((message) => (
        <li key={message.id} className={styles.toastWrapper}>
          <Toast id={message.id} variant={message.variant} closeToaster={removeToaster}>
            {message.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
