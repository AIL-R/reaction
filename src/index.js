import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 导入样式文件
import App from './App'; // 导入主应用组件

// 确保 React 应用渲染到页面的根元素
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
