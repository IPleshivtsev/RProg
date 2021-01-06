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
              title={item.title}
              preview={item.preview}
              num_comments={item.num_comments}
              score={item.score}
              created={item.created}
          />)
        })}
        </ul>
    )
}
