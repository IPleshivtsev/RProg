import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate } from './indexTemplate';
import {App} from "../App";

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App()), req.query.code),
    );
});

app.get('*', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(App())),
    );
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});