import {Action, ActionCreator} from "redux";
import axios from "axios";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";

export const SAVE_TOKEN = 'SAVE_TOKEN';
export type SaveTokenAction = {
    type: typeof SAVE_TOKEN
}
export const saveTokenRequest: ActionCreator<SaveTokenAction> = () => ({
    type: SAVE_TOKEN
});

export const SAVE_TOKEN_SUCCESS = 'SAVE_TOKEN_SUCCESS';
export type SaveTokenSuccessAction = {
    type: typeof SAVE_TOKEN_SUCCESS,
    data: string
}
export const saveTokenRequestSuccess: ActionCreator<SaveTokenSuccessAction> = (data) => ({
    type: SAVE_TOKEN_SUCCESS,
    data,
});

export const SAVE_TOKEN_ERROR = 'SAVE_TOKEN_ERROR';
export type SaveTokenErrorAction = {
    type: typeof SAVE_TOKEN_ERROR,
    error: string
}
export const saveTokenRequestError: ActionCreator<SaveTokenErrorAction> = (error) => ({
    type: SAVE_TOKEN_ERROR,
    error,
});

export const saveTokenRequestAsync = (code: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(saveTokenRequest());
    if(code != "undefined") {
        axios.post(
            'https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
            {
                auth: {username: '1UllBdBhYKgJcg', password: 'GEadcFzJJ1p5DYs-VgzKGtlml17oHQ'},
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
            )
            .then(({data}) => {
                if (!data['access_token']) {
                    const error = data['error'];
                    console.log(error);
                    dispatch(saveTokenRequestError(error));
                } else {
                    dispatch(saveTokenRequestSuccess(data['access_token']));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(saveTokenRequestError(String(error)));
            });
    }
}