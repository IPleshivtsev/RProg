import React, {useContext} from 'react';
import styles from './comments.css';
import {Icon} from "../../../Icons";
import {EColors, Text} from "../../../Text";
import {userContext} from "../../../context/userContext";
import {UserLink} from "../TextContent/UserLink";
import {Comment} from "./Comment";

class IComments {
  isOpen?: boolean
}

export function Comments({isOpen}: IComments) {
  const {name} = useContext(userContext)

  return (
      <div className={styles.commentsBlock}>
        <div className={styles.comments}>
          <Comment commentString={'Комментарий 1'} author={name}/>
          <Comment commentString={'Комментарий 2'} author={name} />
          <Comment commentString={'Комментарий 3'} author={name} />
          <Comment commentString={'Комментарий 4'} author={name} />
          <Comment commentString={'Комментарий 5'} author={name} />
          <Comment commentString={'Комментарий 6'} author={name} />
        </div>
      </div>
  );
}
