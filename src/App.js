import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 导入 Routes 和 Route
import StudentPage from './components/StudentPage'; // 学生页面
import HomePage from './components/HomePage'; // 首页
import Navbar from './components/Navbar'; // 导航栏

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* 使用 Routes 代替 Switch */}
          <Route path="/" element={<HomePage />} /> {/* 使用 element 传递组件 */}
          <Route path="/student/:id" element={<StudentPage />} /> {/* 使用 element 传递组件 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
