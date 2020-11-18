import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src="https://cdn.dribbble.com/users/5366043/screenshots/14516455/media/8ca4f1db025d9b7ce1b0aa01a325b548.jpg"
        />
      </div>
  );
}
