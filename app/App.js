import React from 'react';
import ReactDOM from 'react-dom';
import { ModalAddFormula } from '../ModalAddFormula';
import { Formula } from '../Formula';


function App() {
    return (<Formula />)
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
