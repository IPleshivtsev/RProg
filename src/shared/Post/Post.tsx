import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import {Comments} from "../CardsList/Card/Comments";
import {CommentFormContainer} from "../CommentFormContainer";
import {usePostData} from "../../hooks/usePostsData";
import {UserLink} from "../CardsList/Card/TextContent/UserLink";
import { useHistory, useParams } from 'react-router-dom';

interface IPost {
    id: string
}

export function Post() {
    let  { id } = useParams<IPost>();
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory();

    const [data] = usePostData(id);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if(event.target instanceof Node && !ref.current?.contains(event.target))
            {
               history.push('/posts');
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
        <div className={styles.modal} ref={ref} id={id}>
            <h2 style={{lineHeight: 'normal'}}>{data.title}</h2>
            <div>
                <span style={{float: "left"}}>
                    <span>опубликовано </span>
                    {data.created}
                </span>
                <UserLink author={data.author}/>
            </div>
            <div className={styles.content}>
                <p>{data.selfText}</p>
            </div>
          <CommentFormContainer />
            <Comments comments={data.comments}/>
        </div>
    ), node);
}
