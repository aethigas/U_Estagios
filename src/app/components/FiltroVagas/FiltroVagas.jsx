"use client";
import { useState, useEffect, useRef } from "react";
import "./FiltroVagas.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tiposDeVaga = [
  { id: "1", nome: "Todas" },
  { id: "2", nome: "Aprendiz" },
  { id: "3", nome: "Estágio" },
  { id: "4", nome: "Processos públicos" },
];

const niveisEnsino = [
  { id: "1", nome: "Todos" },
  { id: "2", nome: "Ensino fundamental" },
  { id: "3", nome: "Ensino médio" },
  { id: "4", nome: "Técnico" },
  { id: "5", nome: "Superior" },
];

const areasProfissionais = [
  { id: "1", nome: "Todas" },
  { id: "2", nome: "Tecnologia" },
  { id: "3", nome: "Administração" },
  { id: "4", nome: "Saúde" },
];

export default function FiltroDeVagas() {
  const [tipoDeVaga, setTipoDeVaga] = useState("1");
  const [nivelEnsino, setNivelEnsino] = useState("1");
  const [areaProfissional, setAreaProfissional] = useState("1");
  const [cidade, setCidade] = useState("");
  const [vaga, setVaga] = useState("");

  const [abertoTipo, setAbertoTipo] = useState(false);
  const [abertoNivel, setAbertoNivel] = useState(false);
  const [abertoArea, setAbertoArea] = useState(false);

  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setAbertoTipo(false);
        setAbertoNivel(false);
        setAbertoArea(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Função que abre o dropdown clicado e fecha os outros
  const abrirDropdown = (nome) => {
    setAbertoTipo(nome === "tipo");
    setAbertoNivel(nome === "nivel");
    setAbertoArea(nome === "area");
  };

  const aplicarFiltros = () => {
    console.log("Filtros aplicados:", {
      tipoDeVaga,
      nivelEnsino,
      areaProfissional,
      cidade,
      vaga,
    });
  };

  const renderDropdown = (label, items, selected, setSelected, aberto, labelKey) => (
    <div className="mb-3" style={{ position: "relative" }}>
      <h6>{label}</h6>
      <div
        className="form-select"
        onClick={() => abrirDropdown(labelKey)}
        style={{ cursor: "pointer" }}
      >
        {items.find((item) => item.id === selected)?.nome}
      </div>
      {aberto && (
        <ul
          style={{
            listStyle: "none",
            position: "absolute",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ced4da",
            zIndex: 10,
            maxHeight: "170px",
            overflowY: "auto",
            padding: 0,
            margin: 0,
          }}
        >
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setSelected(item.id);
                abrirDropdown(null); // fecha todos depois de selecionar
              }}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {item.nome}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="formVagas" ref={wrapperRef}>
      <div className="container py-4 text-center">
        <div className="row mb-3 justify-content-center">
          <div className="col-md-3 col-12">
            {renderDropdown(
              "Tipo de Vaga",
              tiposDeVaga,
              tipoDeVaga,
              setTipoDeVaga,
              abertoTipo,
              "tipo"
            )}
          </div>

          <div className="col-md-3 col-12">
            {renderDropdown(
              "Nível de ensino",
              niveisEnsino,
              nivelEnsino,
              setNivelEnsino,
              abertoNivel,
              "nivel"
            )}
          </div>

          <div className="col-md-5 col-12">
            {renderDropdown(
              "Área profissional",
              areasProfissionais,
              areaProfissional,
              setAreaProfissional,
              abertoArea,
              "area"
            )}
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
              value={vaga}
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
