import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {assignId, generateId, generateRandomString} from "./utils/react/generateRandomIndex";
import {merge} from "./utils/js/merge";
import {MyList} from "./shared/GenericList/GenericList";

const LIST = [
    {value: 'some'},
    {value: 'other some'},
    {value: 'some'}
].map(generateId)

function AppComponent() {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id != id));
    }

    const handleAdd = () => {
        setList(list.concat(generateId({value: generateRandomString()})))
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <button onClick={handleAdd}>Add Element</button>
                <MyList list={LIST.map(merge({onClick: handleItemClick}))} />
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);