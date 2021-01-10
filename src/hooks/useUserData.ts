import {useEffect, } from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducer";
import {IUserData, meRequestAsync} from "../store/me/actions";
import {saveTokenRequestAsync} from "../store/token/actions";

export function useUserData() {
    const dispatch = useDispatch();
    const data = useSelector<RootState, IUserData>(state => state.me.data);
    const loading = useSelector<RootState, boolean>(state => state.me.loading);

    useEffect(() => {
        dispatch(saveTokenRequestAsync(window.__code__));
    }, [])

    const token = useSelector<RootState, string>(state => state.token.data);

    useEffect(() => {
        if(!token) return;
        dispatch(meRequestAsync());
    }, [token])

    return {
        data,
        loading
    }
}