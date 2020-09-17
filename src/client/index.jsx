import * as ReactDOM from 'react-dom';
import {Header} from "../shared/Header";
import React from "react";

window.addEventListener('load', () => {
    ReactDOM.hydrate(<Header />, document.getElementById('react_root'));
});