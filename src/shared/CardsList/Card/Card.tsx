import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

interface IPostsData {
    author: string;
    id: string;
    title: string;
    preview: string;
    num_comments: number;
    score: number;
    created?: string;
}

export function Card({author, id, title, preview, num_comments, score, created}: IPostsData) {

  return (
    <li className={styles.card} id={`${id}_card`}>
      <Preview url={preview}/>
      <TextContent author={author} title={title} id={id} created={created}/>
      <Menu idCard={`${id}_card`}/>
      <Controls score={score} num_comments={num_comments}/>
    </li>
  );
}
