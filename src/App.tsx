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

const LIST = [
    {As: 'li' as const, text: 'some'},
    {As: 'li' as const, text: 'other some'},
    {As: 'li' as const, text: 'some'}
].map(generateId)

function AppComponent() {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id != id));
    }

    const handleAdd = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <button onClick={handleAdd}>Add Element</button>
                <ul>
                    <GenericList list={LIST.map(merge({onClick: handleItemClick}))} />
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