import {ActionCreator, Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction, MeRequestErrorAction,
    MeRequestSuccessAction
} from "./me/actions";
import {MeState, meReducer} from "./me/reducer";
import {tokenReducer, TokenState} from "./token/reducer";
import {
    SAVE_TOKEN,
    SAVE_TOKEN_ERROR, SAVE_TOKEN_SUCCESS,
    SaveTokenAction,
    SaveTokenErrorAction,
    SaveTokenSuccessAction
} from "./token/actions";

export type RootState = {
    commentText: string;
    token: TokenState;
    me: MeState
}

const initialState: RootState = {
    commentText: 'Привет, SkillBox!',
    token: {
        error: '',
        data: ''
        },
    me: {
        loading: false,
        error: '',
        data: {}
    }
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text,
});

type MyAction = UpdateCommentAction
    | SaveTokenAction
    | SaveTokenSuccessAction
    | SaveTokenErrorAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state, commentText: action.text,
            };
        case SAVE_TOKEN:
        case SAVE_TOKEN_SUCCESS:
        case SAVE_TOKEN_ERROR:
            return {
                ...state,
                token: tokenReducer(state.token,action)
            };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            };
        default:
            return state;
    }
}
