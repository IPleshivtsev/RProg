import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import {Comments} from "../CardsList/Card/Comments";
import {CommentFormContainer} from "../CommentFormContainer";

interface IPost {
    id: string;
    onClose?: () => void;
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if(event.target instanceof Node && !ref.current?.contains(event.target))
            {
               props.onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

  return ReactDOM.createPortal((
      <div className={styles.modal} ref={ref} id={props.id}>
        <h2>Следует отметить, что новая модель</h2>

        <div className={styles.content}>
          <p>Есть над чем задуматься</p>
          <p>Есть над чем задуматься</p>
          <p>Есть над чем задуматься</p>
        </div>

          <CommentFormContainer />
          <Comments />
      </div>
      ), node);
}
