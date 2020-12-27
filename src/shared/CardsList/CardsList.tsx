import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {postsContext} from "../context/postsContext";

export function CardsList() {
  const postsArr = useContext(postsContext);

    return (
        <ul>
          {postsArr.map(item => {
          return (<Card
              author={item.author}
              id={item.id}
              title={item.title}
              url={item.url}
              preview={item.preview}
              num_comments={item.num_comments}
              score={item.score}
              created={item.created}
          />)
        })}
        </ul>
    )
}
