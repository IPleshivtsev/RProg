import {ActionCreator, AnyAction, Reducer} from "redux";
import {useEffect, useState} from "react";

export type RootState = {
    commentText: string;
    token: string;
}

const initialState: RootState = {
    commentText: 'Привет, SkillBox!',
    token: ''
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
});

export const setToken: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_TOKEN,
    text,
});

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state, commentText: action.text,
            };
        case UPDATE_TOKEN:
            return {
                ...state, token: action.text,
            };
        default:
            return state;
    }
}
