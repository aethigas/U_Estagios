'use client';

import { useState, useRef, useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import jwtDecode from 'jwt-decode';
import './Login.css';

const tiposUsuario = [
  { id: 'aluno', nome: 'Aluno' },
  { id: 'empresa', nome: 'Empresa' },
];

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    tipo_usuario: '',
  });

  const [error, setError] = useState('');
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownAberto(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChangeForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = () => setDropdownAberto(!dropdownAberto);

  const selecionarTipoUsuario = (id) => {
    handleChangeForm('tipo_usuario', id);
    setDropdownAberto(false);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!form.email) return setError('O e-mail é obrigatório');
    if (!form.password) return setError('A senha é obrigatória');
    if (!form.tipo_usuario) return setError('Selecione o tipo de usuário');

    setError('');
    try {
      const response = await fetch('http://localhost:3001/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          senha: form.password,
          tipo_usuario: form.tipo_usuario,
        }),
      });

      const data = await response.json();

      if (response.status !== 200 || typeof data !== 'string') {
        throw new Error(typeof data === 'string' ? data : data.error || 'Erro desconhecido');
      }

      setCookie('authorization', data);
      const decoded = jwtDecode(data);

      if (decoded.tipo === 'empresa') {
        router.push('/empresa/dashboard');
      } else {
        router.push('/aluno/perfil');
      }
    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row ">
        <div className="col-12 col-md-4 mx-auto">
          <div className="login-container text-center p-4">
            <h1 className="login-title mb-4">Login</h1>
            <form className="login-form" onSubmit={handleForm}>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChangeForm('email', e.target.value)}
                className="login-input form-control mb-3"
              />

              <input
                type="password"
                placeholder="Senha"
                value={form.password}
                onChange={(e) => handleChangeForm('password', e.target.value)}
                className="login-input form-control mb-3"
              />

              <div className="dropdown mb-3" ref={dropdownRef}>
                <div
                  className="dropdown-toggle form-control text-start"
                  onClick={toggleDropdown}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="listbox"
                  aria-expanded={dropdownAberto}
                >
                  {form.tipo_usuario
                    ? tiposUsuario.find((t) => t.id === form.tipo_usuario)?.nome
                    : 'Tipo de usuário'}
                  <span className="dropdown-arrow float-end">▾</span>
                </div>

                {dropdownAberto && (
                  <ul className="dropdown-menu w-100 show mt-1" role="listbox">
                    {tiposUsuario.map((item) => (
                      <li
                        key={item.id}
                        role="option"
                        aria-selected={form.tipo_usuario === item.id}
                        className={`dropdown-option dropdown-item ${
                          form.tipo_usuario === item.id ? 'active' : ''
                        }`}
                        onClick={() => selecionarTipoUsuario(item.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            selecionarTipoUsuario(item.id);
                          }
                        }}
                        tabIndex={0}
                      >
                        {item.nome}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {error && <p className="login-error text-danger fw-bold">{error}</p>}

              <div className="login-button-container">
                <button type="submit" className="login-button btn btn-primary w-100 mt-3">
                  Entrar
                </button>
              </div>

              <p className="login-link mt-3">
                <Link href="/rotas/cadastro">Não possui uma conta? Cadastre-se</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
