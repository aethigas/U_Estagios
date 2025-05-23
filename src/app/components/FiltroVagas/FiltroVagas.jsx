"use client";
import { useState } from "react";
import "./FiltroVagas.css";
import "bootstrap/dist/css/bootstrap.min.css";

const areasProfissionais = [
  { id: 1, nome: "Todas" },
  { id: 2, nome: "Tecnologia" },
  { id: 3, nome: "Administração" },
  { id: 4, nome: "Saúde" },
];

export default function FiltroDeVagas() {
  const [tipoDeVaga, setTipoDeVaga] = useState("1");
  const [nivelEnsino, setNivelEnsino] = useState("1");
  const [areaProfissional, setAreaProfissional] = useState("1");
  const [cidade, setCidade] = useState("");
  const [vaga, setVaga] = useState("");

  const aplicarFiltros = () => {
    console.log("Filtros aplicados:");
    console.log({
      tipoDeVaga,
      nivelEnsino,
      areaProfissional,
      cidade,
    });
  };

  return (
    <div className="full-width-bg">
      <div className="container py-4 text-center">
        <div className="row mb-3 justify-content-center">
          <div className="col-md-3 col-12 mb-3">
            <h6>Tipo de Vaga</h6>
            <select
              className="form-select"
              value={tipoDeVaga}
              onChange={(e) => setTipoDeVaga(e.target.value)}
            >
              <option value="1">Todas</option>
              <option value="2">Aprendiz</option>
              <option value="3">Estágio</option>
              <option value="4">Processos públicos</option>
            </select>
          </div>

          <div className="col-md-3 col-12 mb-3">
            <h6>Nível de ensino</h6>
            <select
              className="form-select"
              value={nivelEnsino}
              onChange={(e) => setNivelEnsino(e.target.value)}
            >
              <option value="1">Todos</option>
              <option value="2">Ensino fundamental</option>
              <option value="3">Ensino médio</option>
              <option value="4">Técnico</option>
              <option value="5">Superior</option>
            </select>
          </div>

          <div className="col-md-5 col-12 mb-3">
            <h6>Área profissional</h6>
            <select
              className="form-select"
              value={areaProfissional}
              onChange={(e) => setAreaProfissional(e.target.value)}
            >
              {areasProfissionais.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 col-12 mb-3">
            <h6>Cidade</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="col-md-3 col-12 mb-3">
            <h6>Código da vaga</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Código da vaga"
              value={cidade}
              onChange={(e) => setVaga(e.target.value)}
            />
          </div>

          <div className="col-md-2 col-12 text-end">
            <button
              className="btn btn w-100 mt-custom"
              style={{
                height: "3.5rem",
                backgroundColor: "#085f26",
                color: "#fff",
              }}
              onClick={aplicarFiltros}
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
