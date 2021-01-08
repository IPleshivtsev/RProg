import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {RootState, setToken} from "../store";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
    const [data, setData] = useState<IUserData>({});

    const dispatch = useDispatch();
    useEffect(() => {
        if (window.__token__) {
            dispatch(setToken(window.__token__));
        }
    },[])

    const token = useSelector<RootState, string>(state => state.token);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const userData = resp.data;
                setData({name: userData.name, iconImg: userData.icon_img});
            })
            .catch(console.log);
    }, [token])

    return [data]
}