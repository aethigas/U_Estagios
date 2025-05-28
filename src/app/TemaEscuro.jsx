'use client';

import { useEffect, useState } from 'react';

export default function TemaEscuro
({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 999,
        }}
      >
        {theme === 'light' ? ' Modo Escuro' : 'Modo Claro'}
      </button>
      {children}
    </>
  );
}
