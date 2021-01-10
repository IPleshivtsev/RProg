import React from "react";
import {useUserData} from "../../hooks/useUserData";

export interface IUserContextData {
    name?: string;
    iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({children}: {children: React.ReactNode}) {

    return (
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}