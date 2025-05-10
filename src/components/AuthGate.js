import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock } from 'react-icons/fi';

const AuthGate = ({ onAuth }) => {
  const [inputId, setInputId] = useState('');
  const [showStudents, setShowStudents] = useState(false);

  const handleAuth = () => {
    if (inputId.match(/^2023\d{4}$/)) {
      setShowStudents(true);
      onAuth(inputId);
    }
  };

  return (
    <div className="auth-container">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="auth-box"
      >
        <div className="school-brand">
          <img src="/reaction/static/media/logo.png" alt="育才logo" />
          <h2>为每个孩子准备好未来</h2>
        </div>
        
        <div className="auth-form">
          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type="text"
              placeholder="请输入学生证号（2023开头）"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              pattern="2023\d{4}"
            />
          </div>
          <button 
            onClick={handleAuth}
            className="auth-button animate__animated animate__pulse"
          >
            <Unlock /> 验证身份
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthGate;