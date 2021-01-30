import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css'
import {Card} from "./Card";
import axios from "axios";
import {RootState} from "../../store/reducer";
import {useSelector} from "react-redux";

export function CardsList() {
  const token = useSelector<RootState>(state => state.token.data);
  const [posts, setPosts] = useState<Array<IPostsData>>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [countLoad, setCountLoad] = useState(0);

  const bottomOfList = useRef<HTMLDivElement>(null);

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

    async function load() {
            setLoading(true);
            setErrorLoading('');
            const postsArr: Array<IPostsData> = [];

            try {
                const {data: {data: {children, after}}} = await axios.get('https://oauth.reddit.com/rising', {
                    headers: {Authorization: `bearer ${token}`},
                    params: {
                        limit:10,
                        after: nextAfter
                    }
                });

                children.map((child: any) => (
                    postsArr.push({
                        author: child.data.author || '',
                        id: child.data.id || '',
                        title: child.data.title || '',
                        url: child.data.url || '',
                        preview: (child.data.thumbnail && child.data.thumbnail.indexOf('http') !== -1) ? child.data.thumbnail : '',
                        num_comments: child.data.num_comments || 0,
                        score: child.data.score || 0,
                        created: child.data.created_utc ?
                            new Date(child.data.created_utc * 1000).toLocaleDateString() + ' ' +
                            new Date(child.data.created_utc * 1000).toLocaleTimeString() : ''
                    })
                ));

                setNextAfter(after);
                setPosts(prevPostsArr => prevPostsArr.concat(...postsArr));
            } catch (error) {
                setErrorLoading(String(error));
            }
            setLoading(false);
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if(countLoad < 3) {
                    load();
                    setCountLoad(countLoad+1);
                }
            }
        }, {
            rootMargin: '10px',
        });

        if(bottomOfList.current) {
            observer.observe(bottomOfList.current);
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current);
            }
        }
    }, [bottomOfList.current, nextAfter, token]);

    function loadButton() {
        setCountLoad(1);
        load();
    }

    return (
        <ul>
            {posts.length === 0 && !loading && !errorLoading && (
                <div style={{textAlign:'center'}}>
                    Нет ни одного поста
                </div>
            )}

            {posts.map(post => (
                <Card
                    key={post.id}
                    author={post.author}
                    id={post.id}
                    title={post.title}
                    preview={post.preview}
                    num_comments={post.num_comments}
                    score={post.score}
                    created={post.created}
                  />
            ))}

            <div ref={bottomOfList} />

            {loading && (
                <div style={{textAlign:'center'}}>
                    Загрузка...
                </div>
            )}

            {errorLoading && (
                <div role="alert" style={{textAlign:'center'}}>
                    {errorLoading}
                </div>
            )}

            {countLoad == 3 && !loading && (
                <button className={styles.buttonLoad} onClick={loadButton}>Загрузить ещё</button>
            )}
        </ul>
    )
}
