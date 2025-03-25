// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 创建错误边界组件（生产环境使用）
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Crashed:', error, errorInfo);
    // 这里可以添加错误上报逻辑
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h1>系统暂时不可用</h1>
          <p>请刷新页面或稍后再试</p>
          <button onClick={() => window.location.reload()}>
            点击刷新
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 获取根节点
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('找不到根节点元素，请检查public/index.html');
}

// 创建React根实例
const root = ReactDOM.createRoot(rootElement);

// 渲染应用
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

// 性能监控配置
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log); // 生产环境上报到分析系统
}

// 注册Service Worker（PWA支持）
if ('serviceWorker' in navigator && process.env.NODE_END === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${process.env.PUBLIC_URL}/service-worker.js`)
      .then(registration => {
        console.log('ServiceWorker注册成功：', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker注册失败：', error);
      });
  });
}