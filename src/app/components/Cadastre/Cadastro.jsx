'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cadastrarUsuario, cadastrarEmpresa } from '@/lib/api';
import './Cadastro.css';

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    endereco: '',
    escola: '',
    tipo_usuario: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (form.tipo_usuario === 'aluno') {
        await cadastrarUsuario({
          nome: form.nome,
          email: form.email,
          senha: form.senha,
          tipo_usuario: 'aluno',
          idade: form.idade,
          endereco_aluno: form.endereco,
          nome_escola: form.escola,
        });
      } else if (form.tipo_usuario === 'empresa') {
        await cadastrarEmpresa({
          nome: form.nome,
          email: form.email,
          senha: form.senha,
          endereco_empresa: form.endereco,
        });
      } else {
        throw new Error('Selecione um tipo de usuário');
      }

      router.push('/login'); // redireciona após sucesso
    } catch (err) {
      setError(err.message || 'Erro ao cadastrar');
    }
  };

  return (
    <div className="container">
      <div className="cadastro-container">
        <h1 className="cadastro-title">Cadastro</h1>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input
            className="cadastro-input"
            placeholder="Nome"
            value={form.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            required
          />
          <input
            className="cadastro-input"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
          <input
            className="cadastro-input"
            type="password"
            placeholder="Senha"
            value={form.senha}
            onChange={(e) => handleChange('senha', e.target.value)}
            required
          />

          {form.tipo_usuario === 'aluno' && (
            <>
              <input
                className="cadastro-input"
                placeholder="Idade"
                value={form.idade}
                onChange={(e) => handleChange('idade', e.target.value)}
              />
              <input
                className="cadastro-input"
                placeholder="Endereço"
                value={form.endereco}
                onChange={(e) => handleChange('endereco', e.target.value)}
              />
              <input
                className="cadastro-input"
                placeholder="Escola"
                value={form.escola}
                onChange={(e) => handleChange('escola', e.target.value)}
              />
            </>
          )}

          {form.tipo_usuario === 'empresa' && (
            <input
              className="cadastro-input"
              placeholder="Endereço da Empresa"
              value={form.endereco}
              onChange={(e) => handleChange('endereco', e.target.value)}
            />
          )}

          <select
            className="cadastro-input"
            value={form.tipo_usuario}
            onChange={(e) => handleChange('tipo_usuario', e.target.value)}
            required
          >
            <option value="">Selecione o tipo de usuário</option>
            <option value="aluno">Aluno</option>
            <option value="empresa">Empresa</option>
          </select>

          {error && <p className="cadastro-error text-danger fw-bold">{error}</p>}

          <div className="cadastro-button-container">
            <button type="submit" className="cadastro-button">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
