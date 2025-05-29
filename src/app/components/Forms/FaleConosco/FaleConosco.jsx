'use client'

import React, { useState } from 'react';
import './FaleConosco.css';

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="container FaleConosco"> 
   
      <div className="row justify-content-end ">
      
        <div className="col-md-4 mt-5 Principal">
        <div className="row">
           <div className="col-md-12 mt-5 mb-1 FeedBack">
           <h1>FeedBack</h1>
        </div>
        </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group Form">
              <input
                className="form-control"
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group Form">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group Form">
              <textarea
                className="form-control"
                name="mensagem"
                placeholder="Digite sua mensagem"
                rows="3"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn BotaoEnviar mt-3 mb-3" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
