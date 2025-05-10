import { ProTable } from '@ant-design/pro-table';
import { Tag, Button } from 'antd';

const TeacherConsole = () => {
  const columns = [
    {
      title: '学生姓名',
      dataIndex: 'name',
      sorter: true
    },
    {
      title: '最近成绩',
      render: (_, record) => (
        <div className="grade-tags">
          <Tag color="blue">语文：{record.chinese}</Tag>
          <Tag color="geekblue">数学：{record.math}</Tag>
          <Tag color="purple">英语：{record.english}</Tag>
        </div>
      )
    },
    {
      title: '操作',
      render: () => (
        <>
          <Button type="link">编辑</Button>
          <Button type="link">发送通知</Button>
        </>
      )
    }
  ];

  return (
    <div className="teacher-console">
      <div className="console-header">
        <h2>教师管理控制台</h2>
        <Button type="primary" icon={<NotificationOutlined />}>
          发布紧急通知
        </Button>
      </div>
      <ProTable 
        columns={columns}
        request={async (params) => {
          const res = await fetch('/api/students');
          return res.json();
        }}
        rowKey="id"
        pagination={{
          pageSize: 10
        }}
      />
    </div>
  );
};