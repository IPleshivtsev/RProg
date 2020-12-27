import React from "react";
import {usePostsData} from "../../hooks/usePostsData";

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

export const postsContext = React.createContext<IPostsData[]>([]);

export function PostsContextProvider({children}: {children: React.ReactNode}) {
    const [data] = usePostsData();

    return (
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    )
}