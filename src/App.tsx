import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {assignId, generateId, generateRandomString} from "./utils/react/generateRandomIndex";
import {merge} from "./utils/js/merge";
import {GenericList} from "./shared/GenericList/GenericList";
import {Dropdown} from "./shared/Dropdown";
import {Icon} from "./shared/Icons";

const LIST = [
    {As: 'li' as const, text: 'some', id: '1'},
    {As: 'li' as const, text: 'other some', id: '2'},
    {As: 'li' as const, text: 'some', id: '3'}
]

function AppComponent() {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        debugger;
        setList(list.filter((item) => item.id != id));
    }

    const handleAdd = () => {
        debugger;
        setList(list.concat({text: generateRandomString(), As: 'li' as const, id: (parseInt(list[list.length-1].id)+1).toString()}))
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <button onClick={handleAdd}>Add Element</button>
                <ul>
                    <GenericList list={list.map(merge({onClick: handleItemClick}))} />
                </ul>
                <div style={{padding: 20}}>
                <br/>
                <Dropdown
                    onClose={() => console.log('closed')}
                    onOpen={() => console.log('opened')}
                    isOpen={false}
                    button={<button>Test</button>}>
                    <CardsList />
                </Dropdown>
                </div>
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);