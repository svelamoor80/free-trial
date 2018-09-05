import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toggle-switch/dist/css/switch.min.css';
import './index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import registerServiceWorker from './registerServiceWorker';

class MainApp extends Component {

    render() {
        return (
            <div>
                <div className="teikaLogo"><img alt="Teikametrics logo" src="/assets/Teika Logos/TeikaLogo_H_black.svg" /></div>
                <Routes />
            </div>
        )
    }
}

ReactDOM.render(<Router><MainApp /></Router>, document.getElementById('root'));
registerServiceWorker();

export default MainApp;
