// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import NewPage from './NewPage';

const NewHomePage = () => {
  const [students, setStudents] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);  // 修复：添加 isPlaying 状态

  useEffect(() => {
    // 使用 PUBLIC_URL 确保 API 路径正确
    fetch(`${process.env.PUBLIC_URL}/api/students`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => {
        console.error("数据加载失败", error);
        setStudents([{ id: 1, name: "测试学生" }]);
      });

    // 修复：没有音频播放相关代码，可以添加其他副作用逻辑
  }, []); // 修复：useEffect 依赖项为空数组，确保只在组件挂载时执行

  return (
    <div className="app-container">
      <header className="app-header">
        <img 
          src={`${process.env.PUBLIC_URL}/static/images/logo.png`} 
          alt="育才logo" 
          className="logo" 
        />
        <h1>东北育才沈抚示范学校家校互动平台</h1>
        {!isPlaying && (
          <div className="audio-guide">
            <span>点击页面任意位置启用背景音乐</span>
          </div>
        )}
      </header>

      <main className="main-content">
        <section className="student-list">
          <h2>学生列表</h2>
          <div className="version-switcher">
            {/* 使用绝对路径返回旧版 */}
            <Link to={`${process.env.PUBLIC_URL}/`}>返回旧版</Link>
          </div>
          <ul>
            {students.length === 0 ? (
              <p className="loading">正在加载学生数据...</p>
            ) : (
              students.map((student) => (
                <li key={student.id} className="student-card">
                  <div className="student-info">
                    <span className="student-id">学号：{student.id}</span>
                    <span className="student-name">{student.name}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 东北育才沈抚示范学校</p>
      </footer>
    </div>
  );
};

const OldHomePage = () => (
  <div className="legacy-container">
    <h1>欢迎使用旧版平台</h1>
    <div className="version-switcher">
      {/* 直接跳转到 basename 根路径 */}
      <Link to="/">点击体验新版系统</Link>
    </div>
    <div className="notice">
      <p>旧版系统将于2025年12月31日停止维护</p>
    </div>
  </div>
);

function App() {
  return (
    <Router basename="/reaction">
      <NewHomePage /> {/* 修复：渲染 NewHomePage 组件 */}
      {/* 其他路由配置 */}
    </Router>
  );
}

export default App;
