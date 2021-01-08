import React from 'react';
import styles from './comments.css';
import {Comment} from "./Comment";
import {TCommentData} from "../../../../hooks/usePostsData";

interface IComments {
    comments: TCommentData[]
    isOpen?: boolean
}

export function Comments({comments, isOpen}: IComments) {
  return (
      <div className={styles.commentsBlock}>
          <div className={styles.comments}>
              {comments.map(item => {
                  return (<Comment
                      commentString={item.body}
                      author={item.author}
                      created={item.created}
                  />)
              })}
        </div>
      </div>
  );
}
