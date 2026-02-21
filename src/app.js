// src/app.js

import React from 'react';
import ReactDOM from 'react-dom';
import SOSButton from './components/SOSButton';
import './styles/main.css';

const App = () => {
    return (
        <div className="app">
            <h1>Safewalk</h1>
            <SOSButton />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));