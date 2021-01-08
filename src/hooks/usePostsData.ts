import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store";

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

export type TCommentData = {
    author: string;
    created: string;
    body: string;
}

interface IPostData {
    title: string;
    author: string;
    created?: string;
    selfText: string;
    comments: TCommentData[];
}

export function usePostsData() {
    const [data, setData] = useState<Array<IPostsData>>([]);
    const token = useSelector<RootState, string>(state => state.token);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                if(resp.data.data !== undefined)
                {
                    const postsData: Array<any> = resp.data.data.children;
                    const postsArr: Array<IPostsData> = [];
                    postsData.map(item => (
                        postsArr.push({
                            author: item.data.author || '',
                            id: item.data.id || '',
                            title: item.data.title || '',
                            url: item.data.url || '',
                            preview: (item.data.thumbnail && item.data.thumbnail.indexOf('http') !== -1) ? item.data.thumbnail : '',
                            num_comments: item.data.num_comments || 0,
                            score: item.data.score || 0,
                            created: item.data.created_utc ?
                                new Date(item.data.created_utc * 1000).toLocaleDateString() + ' ' +
                                new Date(item.data.created_utc * 1000).toLocaleTimeString() : ''
                        })
                    ));
                    setData(postsArr);
                }
            })
            .catch(console.log);
    }, [token])

    return [data]
}

export function usePostData(postId: string) {
    const [data, setData] = useState<IPostData>({title: '', author: '', selfText: '', comments: [] });
    const token = useSelector<RootState, string>(state => state.token);

    useEffect(() => {
        axios.get(`https://oauth.reddit.com/comments/${postId}?limit=20`, {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {

                if(resp.data !== undefined)
                {
                    const postData: IPostData = {
                        title: resp.data[0].data.children[0].data.title,
                        author: resp.data[0].data.children[0].data.author,
                        created: resp.data[0].data.children[0].data.created_utc ?
                            new Date(resp.data[0].data.children[0].data.created_utc * 1000).toLocaleDateString() + ' ' +
                            new Date(resp.data[0].data.children[0].data.created_utc * 1000).toLocaleTimeString() : '',
                        selfText: resp.data[0].data.children[0].data.selfText,
                        comments: [],
                    };

                    const commentsData: Array<TCommentData> = [];
                    const commentsArr: Array<any> = resp.data[1].data.children;

                    commentsArr.map(item => (
                        commentsData.push({
                            author: item.data.author || '',
                            created: item.data.created_utc ?
                                new Date(item.data.created_utc * 1000).toLocaleDateString() + ' ' +
                                new Date(item.data.created_utc * 1000).toLocaleTimeString() : '',
                            body: item.data.body || '',
                        })
                    ));
                    postData.comments = commentsData;
                    setData(postData);
                }
            })
            .catch(console.log);
    }, [token])

    return [data]
}