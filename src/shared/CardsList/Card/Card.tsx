import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {generateRandomString} from "../../../utils/react/generateRandomIndex";

interface IPostsData {
    author: string;
    title: string;
    preview: string;
    num_comments: number;
    score: number;
    created?: string;
}

export function Card({author, title, preview, num_comments, score, created}: IPostsData) {
  var idCard = generateRandomString();

  return (
    <li className={styles.card} id={idCard}>
      <Preview url={preview}/>
      <TextContent author={author} title={title} id={idCard} created={created}/>
      <Menu idCard={idCard}/>
      <Controls score={score} num_comments={num_comments}/>
    </li>
  );
}
