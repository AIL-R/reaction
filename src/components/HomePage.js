import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // 引入样式

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>学生表现展示平台</h1>
      <p>点击下面的链接查看学生的详细表现：</p>
      <div className="student-links">
        <Link to="/student/student001" className="student-link">学生 001</Link>
        <Link to="/student/student002" className="student-link">学生 002</Link>
        {/* 更多学生 */}
      </div>
    </div>
  );
};

export default HomePage;
