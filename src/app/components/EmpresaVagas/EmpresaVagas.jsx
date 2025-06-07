"use client";

import { useEffect, useState } from "react";
import "./Empresa.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        const res = await fetch("http://localhost:3001/api/vagas");
        const data = await res.json();

        const vagasFormatadas = data.map((vaga) => ({
          ...vaga,
          atividades: vaga.atividades?.split(",") || [],
          requisitos: vaga.requisitos?.split(",") || [],
        }));

        setVagas(vagasFormatadas);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      }
    }

    fetchVagas();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const adicionarOuEditarVaga = async () => {
    try {
      const metodo = editId ? "PUT" : "POST";
      const url = editId
        ? `http://localhost:3001/api/vagas/${editId}`
        : "http://localhost:3001/api/vagas";

      const resposta = await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!resposta.ok) throw new Error("Erro ao salvar vaga");

      const vagaSalva = await resposta.json();

      if (editId) {
        setVagas((v) =>
          v.map((vaga) => (vaga.id === editId ? vagaSalva : vaga))
        );
        setEditId(null);
      } else {
        setVagas([...vagas, vagaSalva]);
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
    } catch (error) {
      console.error("Erro ao salvar vaga:", error);
    }
  };

  const confirmarExcluirVaga = async () => {
    try {
      const resposta = await fetch(`http://localhost:3001/api/vagas/${vagaParaExcluir}`, {
        method: "DELETE",
      });

      if (!resposta.ok) throw new Error("Erro ao excluir vaga");

      setVagas(vagas.filter((vaga) => vaga.id !== vagaParaExcluir));

      const updatedInscritos = { ...inscritos };
      delete updatedInscritos[vagaParaExcluir];
      setInscritos(updatedInscritos);
      setVagaParaExcluir(null);
    } catch (error) {
      console.error("Erro ao excluir vaga:", error);
    }
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
        const resposta = await fetch(`http://localhost:3001/api/vagas/${vagaId}/inscritos`);
        if (!resposta.ok) throw new Error("Erro ao buscar inscritos");

        const data = await resposta.json();
        setInscritos({ ...inscritos, [vagaId]: data });
      } catch (e) {
        console.error("Erro ao buscar inscritos:", e);
        setInscritos({
          ...inscritos,
          [vagaId]: [
            {
              nome: "João da Silva",
              email: "joao@email.com",
              telefone: "(11) 99999-0000",
            },
            {
              nome: "Maria Oliveira",
              email: "maria@email.com",
              telefone: "(21) 88888-1111",
            },
          ],
        });
      }
    }

    setVerInscritosId(vagaId);
  };

  return (
    <div className="empresa-vagas container py-5">
      <h1 className="mb-4">Gerenciar vagas</h1>

      <div className="row">
        <div className="col-md-6 AstronautaEditar">
          <img src="/Astronautas/AstronautaEditar.png" alt="editar" />
        </div>
        <div className="Formulario col-md-6 card p-4 mb-5">
          <div className="FormularioTitulo">
            <h1>{editId ? "Editar vagas" : "Adicionar nova vaga"}</h1>
          </div>

          <form className="Form">
            <div className="row">
              {Object.keys(form).map((key) => (
                <div className="col-md-6 mb-3" key={key}>
                  <input
                    type="text"
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    placeholder={key[0].toUpperCase() + key.slice(1)}
                  />
                </div>
              ))}
            </div>

            <div className="BotaoEnviar">
              <button type="button" onClick={adicionarOuEditarVaga}>
                {editId ? "Atualizar Vaga" : "Adicionar Vaga"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <h1>Vagas ativas</h1>
        {vagas.map((vaga) => (
          <div className="col-md-4 mb-4" key={vaga.id}>
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
                          <strong>{aluno.nome}</strong> - {aluno.email} - {aluno.telefone}
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

      {/* Modal Excluir */}
      {vagaParaExcluir && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          onClick={() => setVagaParaExcluir(null)}
        >
          <div
            className="modal-dialog"
            role="document"
            onClick={(e) => e.stopPropagation()}
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
                <p>Essa ação não poderá ser desfeita.</p>
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
