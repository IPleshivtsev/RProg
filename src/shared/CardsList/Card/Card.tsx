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
    url: string;
    preview: string;
    num_comments: number;
    score: number;
    created?: string;
}

export function Card({author, id, title, url, preview, num_comments, score, created}: IPostsData) {
  return (
    <li className={styles.card} id={id}>
      <TextContent author={author} title={title} url={url} created={created}/>
      <Preview url={preview}/>
      <Menu />
      <Controls score={score} num_comments={num_comments}/>
    </li>
  );
}
