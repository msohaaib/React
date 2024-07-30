import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div 
        style={{ width: 100, height: 100, backgroundColor: 'blue' }}
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      />
    </div>
  );
}

export default App;
