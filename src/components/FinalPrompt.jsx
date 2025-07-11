import React, { useEffect } from 'react';

const FinalPrompt = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Return to OTP after 1.5s
    }, 1500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/40 text-center text-black p-8 rounded-xl shadow-2xl w-[90%] max-w-md animate-fadeIn">
        <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Congratulations!</h2>
        <p className="text-lg">Your vote has been submitted successfully.</p>
      </div>
    </div>
  );
};

export default FinalPrompt;
