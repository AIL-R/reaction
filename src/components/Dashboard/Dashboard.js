import { Spring, animated } from 'react-spring';
import { Radar } from 'react-chartjs-2';

const Dashboard = ({ student }) => {
  // 模拟学生数据
  const performanceData = {
    labels: ['语文', '数学', '英语', '物理', '化学'],
    datasets: [{
      data: [85, 92, 88, 79, 95],
      backgroundColor: 'rgba(24, 144, 255, 0.2)',
      borderColor: '#1890ff'
    }]
  };

  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {styles => (
        <animated.div style={styles} className="dashboard-container">
          <div className="welcome-banner">
            <h1>欢迎{student.name}家长</h1>
            <p>最后登录：{new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="data-grid">
            <div className="card performance-card">
              <h3>学业能力雷达图</h3>
              <Radar data={performanceData} />
            </div>

            <div className="card quick-actions">
              <h3>快捷操作</h3>
              <div className="action-buttons">
                <button className="action-btn message">
                  <MessageOutlined /> 发送留言
                </button>
                <button className="action-btn grade">
                  <BarChartOutlined /> 查看成绩
                </button>
                <button className="action-btn calendar">
                  <CalendarOutlined /> 校历查询
                </button>
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
};