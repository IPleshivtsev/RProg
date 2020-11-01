import * as ReactDOM from 'react-dom';
import React from "react";
import {App} from "../App";

window.addEventListener('load', () => {
    ReactDOM.hydrate(<App />, document.getElementById('react_root'));
});