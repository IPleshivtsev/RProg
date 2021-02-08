import React, {useEffect, useState} from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";
import {applyMiddleware, createStore} from "redux";
import {Provider, useDispatch} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import {Post} from "./shared/Post";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
    //const dispatch = useDispatch();
    //dispatch(saveTokenRequestAsync(window.__code__));

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Provider store={store}>
            {mounted && (
            <BrowserRouter>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                        <Header/>
                        <Content>
                            <Switch>
                                <Redirect exact from="/" to="/posts" />
                                <Redirect from="/auth" to="/posts" />

                                <Route path="/posts">
                                    <CardsList />
                                    <Route path="/posts/:id">
                                        <Post />
                                    </Route>
                                </Route>

                                <Route path="*">
                                    <h1 style={{ textAlign: 'center', backgroundColor: 'white', padding: '20px' }}>
                                        404 - страница не найдена
                                    </h1>
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
            </BrowserRouter>
            )}
        </Provider>
    );
}

export const App = hot(() => <AppComponent />);