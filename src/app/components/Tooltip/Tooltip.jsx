'use client';
import React, { useState } from 'react';
import './tooltip.css';

export default function Tooltip() {
  const [ativo, setAtivo] = useState(false);

  const toggleTooltip = () => {
    setAtivo(!ativo);
  };

  return (
    <div className="tooltip-container">
      <span className="central-icon" onClick={toggleTooltip}>
        <svg
          viewBox="0 0 16 16"
          className="bi bi-send-fill"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
        </svg>
      </span>

      <div className={`meia-lua ${ativo ? 'ativo' : ''}`}>
        <span className="tooltip-icon">
          <i className="bi bi-twitter">Home</i>
        </span>
        <span className="tooltip-icon">
          <i className="bi bi-facebook"> Home</i>
        </span>
        <span className="tooltip-icon">
          <i className="bi bi-whatsapp">Home</i>
        </span>
        <span className="tooltip-icon">
          <i className="bi bi-discord">Home</i>
        </span>
      </div>
    </div>
  );
}
