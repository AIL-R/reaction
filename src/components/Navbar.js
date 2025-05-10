import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 引入自定义样式

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>班级进展平台</h1>
      </div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/student/student001">学生 001</Link></li>
        <li><Link to="/student/student002">学生 002</Link></li>
        {/* 更多学生链接 */}
      </ul>
    </nav>
  );
};

export default Navbar;
