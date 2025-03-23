import io from 'socket.io-client';

const socket = io('https://api.yucai.com', {
  auth: {
    token: localStorage.getItem('parentToken')
  },
  transports: ['websocket']
});

// 消息监听处理
export const initSocket = (callbacks) => {
  socket.on('connect', () => {
    console.log('Connected to real-time server');
    socket.emit('join-room', `parent_${localStorage.getItem('studentId')}`);
  });

  socket.on('new-message', callbacks.onMessage);
  socket.on('emergency-alert', callbacks.onAlert);
  socket.on('grade-update', callbacks.onGradeUpdate);
};

export const sendMessage = (msg) => {
  socket.emit('parent-message', {
    studentId: localStorage.getItem('studentId'),
    content: msg
  });
};