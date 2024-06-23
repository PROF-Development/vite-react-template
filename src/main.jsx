import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ConfigProvider } from 'antd';
import config, { antdTheme } from './config';

ReactDOM.createRoot(document.getElementById('root')).render(
    config.DEBUG ? (
        <React.StrictMode>
            <ConfigProvider theme={antdTheme}>
                <App />
            </ConfigProvider>
        </React.StrictMode>
    ) : (
        <ConfigProvider theme={antdTheme}>
            <App />
        </ConfigProvider>
    )
);
