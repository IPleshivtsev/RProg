import React from 'react';
import styles from './controls.css';
import {KarmaCounter} from "./KarmaCounter";
import {CommentsButton} from "./CommentsButton";
import {Actions} from "./Actions";

interface IControls {
    score: number;
    num_comments: number;
}

export function Controls({score, num_comments}: IControls) {
  return (
      <div className={styles.controls}>
        <KarmaCounter score={score}/>
        <CommentsButton num_comments={num_comments}/>
        <Actions />
      </div>
  );
}
