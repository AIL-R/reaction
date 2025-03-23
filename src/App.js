import React, { useState, useEffect } from "react";
import './App.css';  // 引入 CSS 样式

const App = () => {
  const [students, setStudents] = useState([]);

  // 模拟API请求获取学生数据
  useEffect(() => {
    fetch('/api/students')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="/reaction/static/images/logo.png" alt="育才logo" className="logo" />
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
