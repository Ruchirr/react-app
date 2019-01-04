import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './hello';import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <App message="my friend" />, //this is a prop? how could it be like this
    document.getElementById("root")
);
ReactDOM.render(
<Hello message="my friend"/>, document.getElementById("root"));
ReactDOM.render(
<Hello message="my friend"/>, document.getElementById("tool"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
