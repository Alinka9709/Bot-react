import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from 'material-ui';
import {BrowserRouter} from 'react-router-dom';
import Routers from "./components/Routers";
import './styles/layout.css'

ReactDOM.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Routers/>
        </MuiThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
