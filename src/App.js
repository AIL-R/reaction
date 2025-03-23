import React, { useState, useEffect } from "react";
import './App.css';  // 引入 CSS 样式

const App = () => {
  const [students, setStudents] = useState([]);
  const [audio, setAudio] = useState(null);

  // 模拟API请求获取学生数据
  useEffect(() => {
    // 获取学生数据
    fetch('/api/students')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => {
        console.error("数据加载失败", error);
        setStudents([{ id: 1, name: "测试学生" }]); // 如果请求失败，展示默认数据
      });

    // 随机播放背景音乐
    const audios = [
      "/static/media/Thinking out Loud.mp3", // 音乐文件路径
      // 你可以添加更多的背景音乐文件
    ];

    const randomIndex = Math.floor(Math.random() * audios.length);
    const audioFile = new Audio(audios[randomIndex]);
    audioFile.loop = true; // 设置音乐循环播放
    audioFile.play(); // 播放音乐
    setAudio(audioFile); // 保存音频实例，以便后续停止播放

    // 清理副作用，确保在组件卸载时停止音乐
    return () => {
      if (audio) {
        audio.pause(); // 停止播放
      }
    };
  }, []); // 只在组件加载时执行一次

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/static/images/logo.png" alt="育才logo" className="logo" />
        <h1>东北育才沈抚示范学校家校互动平台</h1>
      </header>

      <main className="main-content">
        <section className="student-list">
          <h2>学生列表</h2>
          <ul>
            {students.length === 0 ? (
              <p>正在加载学生数据...</p>
            ) : (
              students.map((student) => (
                <li key={student.id}>{student.name}</li>
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

export default App;
