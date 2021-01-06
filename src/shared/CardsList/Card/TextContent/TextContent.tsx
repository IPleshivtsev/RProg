import React from 'react';
import styles from './textcontent.css';
import {UserLink} from "./UserLink";
import {Title} from "./Title";

interface ITextContent {
    author: string;
    title: string;
    id: string;
    created?: string;
}

export function TextContent({author, title, id, created}: ITextContent) {
  return (
      <div className={styles.textContent}>
        <Title author={author} id={id} title={title}/>
        <div className={styles.metaData}>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
              {created}
          </span>
          <UserLink author={author} />
        </div>
      </div>
  );
}
