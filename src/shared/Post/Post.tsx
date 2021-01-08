import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import {CommentForm} from "../CommentForm";
import {Comments} from "../CardsList/Card/Comments";
import {usePostData} from "../../hooks/usePostsData";
import {TextContent} from "../CardsList/Card/TextContent";
import {UserLink} from "../CardsList/Card/TextContent/UserLink";
import {Card} from "../CardsList/Card";

interface IPost {
    id: string;
    onClose?: () => void;
}

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);

    const [data] = usePostData(props.id);

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
            <CommentForm/>
            <Comments comments={data.comments}/>
        </div>
    ), node);
}
