"use client";

import { useEffect, useState } from "react";
import "./Empresa.css";

const gerarId = () =>
  Date.now().toString() + Math.floor(Math.random() * 1000);

export default function EmpresaVagas() {
  const [vagas, setVagas] = useState([]);
  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    area: "",
    localizacao: "",
    estado: "",
    horario: "",
    salario: "",
  });
  const [editId, setEditId] = useState(null);
  const [inscritos, setInscritos] = useState({});
  const [verInscritosId, setVerInscritosId] = useState(null);
  const [vagaParaExcluir, setVagaParaExcluir] = useState(null);
  useEffect(() => {
    async function fetchVagas() {
      try {
        const res = await fetch('http://localhost:3001/api/vagas');
        const data = await res.json();
  
        // Se atividades e requisitos vierem como strings separadas por vírgula
        const vagasFormatadas = data.map((vaga) => ({
          ...vaga,
          atividades: vaga.atividades?.split(',') || [],
          requisitos: vaga.requisitos?.split(',') || [],
        }));
  
        setVagas(vagasFormatadas);
      } catch (error) {
        console.error('Erro ao buscar vagas:', error);
      }
    }
  
    fetchVagas();
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const adicionarOuEditarVaga = () => {
    if (editId) {
      setVagas((v) =>
        v.map((vaga) =>
          vaga.id === editId ? { ...vaga, ...form, id: editId } : vaga
        )
      );
      setEditId(null);
    } else {
      setVagas([...vagas, { ...form, id: gerarId() }]);
    }

    setForm({
      titulo: "",
      descricao: "",
      area: "",
      localizacao: "",
      estado: "",
      horario: "",
      salario: "",
    });
  };

  const confirmarExcluirVaga = () => {
    setVagas(vagas.filter((vaga) => vaga.id !== vagaParaExcluir));
    const updatedInscritos = { ...inscritos };
    delete updatedInscritos[vagaParaExcluir];
    setInscritos(updatedInscritos);
    setVagaParaExcluir(null);
  };

  const editarVaga = (vaga) => {
    setForm(vaga);
    setEditId(vaga.id);
  };

  const toggleVerInscritos = async (vagaId) => {
    if (verInscritosId === vagaId) {
      setVerInscritosId(null);
      return;
    }

    if (!inscritos[vagaId]) {
      try {
        const resposta = await fetch(`/api/vagas/${vagaId}/inscritos`);
        if (!resposta.ok) throw new Error("Erro ao buscar inscritos");

        const data = await resposta.json();
        setInscritos({ ...inscritos, [vagaId]: data });
      } catch (e) {
        setInscritos({
          ...inscritos,
          [vagaId]: [
            { nome: "João da Silva", email: "joao@email.com", telefone: "(11) 99999-0000" },
            { nome: "Maria Oliveira", email: "maria@email.com", telefone: "(21) 88888-1111" },
          ],
        });
      }
    }

    setVerInscritosId(vagaId);
  };

  return (
    <div className="empresa-vagas container py-5">
      <h1 className="mb-4">Gerenciar Vagas</h1>

      {/* Formulário */}
      <div className="card p-4 mb-5">
        <h5>{editId ? "Editar Vaga" : "Adicionar Nova Vaga"}</h5>
        <div className="row">
          {Object.keys(form).map((key) => (
            <div className="col-md-6 mb-3" key={key}>
              <input
                type="text"
                name={key}
                value={form[key]}
                onChange={handleChange}
                placeholder={key[0].toUpperCase() + key.slice(1)}
                className="form-control"
              />
            </div>
          ))}
        </div>
        <button onClick={adicionarOuEditarVaga} className="btn btn-primary">
          {editId ? "Atualizar Vaga" : "Adicionar Vaga"}
        </button>
      </div>

      {/* Listagem de Vagas */}
      <div className="row">
        {vagas.map((vaga) => (
          <div className="col-md-6 mb-4" key={vaga.id}>
            <div className="card p-3">
              <h5>{vaga.titulo}</h5>
              <p>{vaga.descricao}</p>
              <ul className="list-unstyled">
                <li>
                  <strong>Área:</strong> {vaga.area}
                </li>
                <li>
                  <strong>Localização:</strong> {vaga.localizacao} - {vaga.estado}
                </li>
                <li>
                  <strong>Horário:</strong> {vaga.horario}
                </li>
                <li>
                  <strong>Salário:</strong> {vaga.salario}
                </li>
              </ul>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => editarVaga(vaga)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => setVagaParaExcluir(vaga.id)}
                >
                  Excluir
                </button>
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => toggleVerInscritos(vaga.id)}
                >
                  {verInscritosId === vaga.id ? "Ocultar" : "Ver Inscritos"}
                </button>
              </div>

              {verInscritosId === vaga.id && (
                <div className="mt-3">
                  <h6>Inscritos:</h6>
                  {inscritos[vaga.id]?.length > 0 ? (
                    <ul>
                      {inscritos[vaga.id].map((aluno, index) => (
                        <li key={index}>
                          <strong>{aluno.nome}</strong> - {aluno.email} -{" "}
                          {aluno.telefone}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Nenhum inscrito ainda.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal excluir*/}
      {vagaParaExcluir && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          onClick={() => setVagaParaExcluir(null)} // fecha ao clicar no fundo
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro do modal
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Deseja mesmo excluir essa vaga?</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setVagaParaExcluir(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Tem certeza que deseja excluir esta vaga? Essa ação não poderá
                  ser desfeita.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setVagaParaExcluir(null)}
                >
                  Cancelar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={confirmarExcluirVaga}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
