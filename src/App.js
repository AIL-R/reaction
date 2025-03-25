// src/App.js
import React, { useState, useEffect } from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link 
} from "react-router-dom";
import './App.css';
import NewPage from './NewPage';

const NewHomePage = () => {
  const [students, setStudents] = useState([]);
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 模拟API请求（使用PUBLIC_URL保证路径正确）
    fetch(`${process.env.PUBLIC_URL}/api/students`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => {
        console.error("数据加载失败", error);
        setStudents([{ id: 1, name: "测试学生" }]);
      });

    const audios = [
      `${process.env.PUBLIC_URL}/static/media/Thinking out Loud.mp3`,
    ];

    const handleFirstClick = () => {
      const randomIndex = Math.floor(Math.random() * audios.length);
      const audioFile = new Audio(audios[randomIndex]);
      audioFile.loop = true;
      audioFile.play();
      setAudio(audioFile);
      setIsPlaying(true);
      document.removeEventListener('click', handleFirstClick);
    };

    document.addEventListener('click', handleFirstClick);

    return () => {
      if (audio) {
        audio.pause();
      }
      document.removeEventListener('click', handleFirstClick);
    };
  }, []);

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
            <Link to="/">返回旧版</Link>
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
      <Link to="/v2">点击体验新版系统</Link>
    </div>
    <div className="notice">
      <p>旧版系统将于2025年12月31日停止维护</p>
    </div>
  </div>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<OldHomePage />} />
        <Route path="/v2" element={<NewHomePage />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </Router>
  );
}

export default App;