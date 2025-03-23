import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AuthGate from './components/AuthGate';
import StudentList from './components/StudentList';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  const [authed, setAuthed] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  return (
    <div className="platform-container">
      <MusicPlayer />
      <AnimatePresence>
        {!authed ? (
          <AuthGate 
            onAuth={(id) => {
              setCurrentStudent(id);
              setAuthed(true);
            }}
          />
        ) : (
          <StudentList studentId={currentStudent} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;