import React, { useState } from 'react';

const OTPPage = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') onVerify(); // Simulated OTP verification
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/images/Glass.jpg')" }}
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/10 border border-white/20 text-black p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_#000]"
      >
        <h2 className="text-3xl font-display font-bold text-center mb-6 drop-shadow-md">
          Enter Your OTP
        </h2>
        <input
          type="text"
          maxLength={6}
          placeholder="123456"
          className="w-full text-center text-xl px-4 py-3 rounded-lg bg-black/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-white/60 text-white"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full mt-6 bg-black/100 text-white py-3 rounded-lg font-semibold hover:bg-black/60 transition duration-200"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default OTPPage;
