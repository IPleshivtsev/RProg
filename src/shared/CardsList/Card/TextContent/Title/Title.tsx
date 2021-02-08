import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface ITitle {
  author: string;
  id: string;
  title: string;
}

export function Title({author, id, title}: ITitle) {

  return (
      <h2 className={styles.title}>
        <Link to={`/posts/${id}`} id={`${id}_title`} className={styles.postLink}>
          {title}
        </Link>
      </h2>
  );
}
