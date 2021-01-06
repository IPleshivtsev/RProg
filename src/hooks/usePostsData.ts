import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";
import {debug} from "webpack";

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

export function usePostsData() {
    const [data, setData] = useState<Array<IPostsData>>([]);
    const token = useContext(tokenContext)

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