// src/lib/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// ==================== USER ====================
export async function loginUsuario({ email, senha, tipo_usuario }) {
  const res = await fetch(`${API_URL}/api/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha, tipo_usuario }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro ao fazer login');
  return data; // JWT
}

export async function cadastrarUsuario({ nome, email, senha, tipo_usuario }) {
  const res = await fetch(`${API_URL}/api/user/cadastro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha, tipo_usuario }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro no cadastro');
  return data;
}

// ==================== EMPRESA ====================
export async function loginEmpresa({ email, senha }) {
  const res = await fetch(`${API_URL}/api/empresa/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro ao fazer login da empresa');
  return data;
}

export async function cadastrarEmpresa({ nome, email, senha }) {
  const res = await fetch(`${API_URL}/api/empresa/cadastro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro ao cadastrar empresa');
  return data;
}

// ==================== VAGAS ====================
export async function getTodasVagas() {
  const res = await fetch(`${API_URL}/api/vagas`);
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro ao buscar vagas');
  return data;
}

export async function getVagaPorId(id) {
  const res = await fetch(`${API_URL}/api/vagas/${id}`);
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro ao buscar vaga');
  return data;
}

// ==================== CANDIDATURAS ====================
export async function getCandidatos() {
  const res = await fetch(`${API_URL}/api/candidatura/candidatos`);
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro ao buscar candidatos');
  return data;
}

export async function candidatarSe(idAluno, idVaga) {
  const res = await fetch(`${API_URL}/api/candidatura/candidatar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idAluno, idVaga }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || 'Erro ao se candidatar');
  return data;
}
