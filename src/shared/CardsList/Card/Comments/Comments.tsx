import React from 'react';
import styles from './comments.css';
import {Comment} from "./Comment";
import {TCommentData} from "../../../../hooks/usePostsData";
import {generateRandomString} from "../../../../utils/react/generateRandomIndex";

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
                      key={generateRandomString()}
                      commentString={item.body}
                      author={item.author}
                      created={item.created}
                  />)
              })}
        </div>
      </div>
  );
}
