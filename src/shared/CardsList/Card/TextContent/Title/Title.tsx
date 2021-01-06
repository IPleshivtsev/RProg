import React, {useState} from 'react';
import styles from './title.css';
import {Post} from "../../../../Post";

interface ITitle {
  author: string;
  id: string;
  title: string;
}

export function Title({author, id, title}: ITitle) {
  const [isModalOpened, setIsModalOpened] = useState(false);


  return (
      <h2 className={styles.title}>
        <a href="#post-url" id={`${id}_title`} className={styles.postLink} onClick={ () => { setIsModalOpened(true); }}>
          {title}
        </a>

        {isModalOpened && (
            <Post id={`${id}_post`} onClose={() => {setIsModalOpened(false); }}/>
        )}
      </h2>
  );
}
