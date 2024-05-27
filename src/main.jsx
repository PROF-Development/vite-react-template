import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ConfigProvider } from 'antd';
import { antdTheme } from './config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={antdTheme}>
    <App />
  </ConfigProvider>
);
