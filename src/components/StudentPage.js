import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import studentData from '../data/studentsData.json'; // 引入数据
import './StudentPage.css'; // 引入样式

const StudentPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const studentInfo = studentData.find(student => student.id === id);
    setStudent(studentInfo);
  }, [id]);

  if (!student) {
    return <div>未找到该学生的反馈内容。</div>;
  }

  return (
    <div className="student-page">
      <div className="student-header">
        <h1>{student.name} 的表现</h1>
      </div>
      <div className="student-info">
        <p><strong>学科成绩：</strong>{student.grades}</p>
        <p><strong>班主任寄语：</strong>{student.teacherComments}</p>
        <p><strong>每周工作计划：</strong>{student.weeklyPlan}</p>
      </div>
      <div className="student-history">
        <h2>历史记录：</h2>
        {student.history.map((entry, index) => (
          <div key={index} className="history-entry">
            <p>{entry.date}: {entry.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;

