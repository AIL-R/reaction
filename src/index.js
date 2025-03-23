import React from 'react';
import ReactDOM from 'react-dom/client'; // 引入 React 18 的方式
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 获取 root 元素并初始化 React 应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 性能监控
reportWebVitals();
