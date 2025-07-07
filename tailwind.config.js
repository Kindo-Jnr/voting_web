/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // Indigo
        accent: "#f97316",  // Orange
        success: "#10b981", // Green
        danger: "#ef4444",  // Red
        base: "#f8fafc",    // Light background
        accent: "#f97316",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
          
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #1e3a8a, #f97316)',
      },
       boxShadow: {
      glow: "0 0 20px rgba(249, 115, 22, 0.7)",
    },
    },
  },
  plugins: [],
};
