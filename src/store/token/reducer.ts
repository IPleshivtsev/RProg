import {
    SAVE_TOKEN,
    SAVE_TOKEN_SUCCESS,
    SAVE_TOKEN_ERROR,
    SaveTokenAction,
    SaveTokenErrorAction,
    SaveTokenSuccessAction
} from "./actions";
import {Reducer} from "react";

export type TokenState = {
    error: string;
    data: string;
}

type MeActions = SaveTokenAction
    | SaveTokenSuccessAction
    | SaveTokenErrorAction;
export const tokenReducer: Reducer<TokenState, MeActions> = (state, action) => {
    switch(action.type) {
        case SAVE_TOKEN:
            return {
                ...state
            };
        case SAVE_TOKEN_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SAVE_TOKEN_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}