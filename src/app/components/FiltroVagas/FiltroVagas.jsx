"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./FiltroVagas.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tiposDeVaga = [
  { id: "1", nome: "Todas" },
  { id: "2", nome: "Aprendiz" },
  { id: "3", nome: "Estágio" },
];

const areasProfissionais = [
  { id: "1", nome: "Todas" },
  { id: "2", nome: "Tecnologia" },
  { id: "3", nome: "Administração" },
  { id: "4", nome: "Saúde" },
];

export default function FiltroDeVagas({ filtros, onAplicarFiltros }) {
  const [filtrosLocais, setFiltrosLocais] = useState(filtros);

  useEffect(() => {
    setFiltrosLocais(filtros);
  }, [filtros]);

  const aplicar = () => {
  if (typeof onAplicarFiltros === "function") {
    onAplicarFiltros(filtrosLocais);
  } else {
    console.warn("onAplicarFiltros não foi fornecido");
  }

  // Fechar o menu mobile após aplicar os filtros
  setMenuOpen(false);
};

 

  const [dropdownAberto, setDropdownAberto] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdownAberto(null);
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const abrirDropdown = (nome) => {
    setDropdownAberto(dropdownAberto === nome ? null : nome);
  };

  const setFiltroLocal = (campo, valor) => {
    setFiltrosLocais((prev) => ({ ...prev, [campo]: valor }));
  };
  

  const renderDropdown = (label, items, selected, onSelect, aberto, labelKey) => (
    <div className="mb-3" style={{ position: "relative" }}>
      <h6>{label}</h6>
      <div
        className="form-select"
        onClick={() => abrirDropdown(labelKey)}
        style={{ cursor: "pointer" }}
      >
        {items.find((item) => item.id === selected)?.nome || "Selecione"}
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
                onSelect(item.id);
                abrirDropdown(null);
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
    <>
      {/* Botão para abrir/fechar filtros no mobile */}
      <div
        className="d-md-none"
        style={{
          display: "flex",
          justifyContent: menuOpen ? "flex-end" : "flex-start",
          padding: "1rem",
          position: menuOpen ? "fixed" : "relative",
          top: menuOpen ? "0" : "auto",
          right: menuOpen ? "0" : "auto",
          zIndex: menuOpen ? 1100 : "auto",
          width: "100%",
          backgroundColor: menuOpen ? "transparent" : "transparent",
        }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir/Fechar filtros"
          style={{
            backgroundColor: "#148a9d",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width={20}
            height={20}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
          {!menuOpen && "Filtros"}
        </button>
      </div>

      {/* Menu de filtros mobile */}
      {menuOpen && (
        <div
          className="formVagas d-md-none"
          ref={wrapperRef}
          style={{
            position: "fixed",
            top: "4.2rem",
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            padding: "1rem",
            zIndex: 1050,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <div className="container text-center">
            <div className="row mb-3 justify-content-center">
              <div className="col-12 mb-3">
                {renderDropdown(
                  "Tipo de Vaga",
                  tiposDeVaga,
                  filtrosLocais.tipoDeVaga,
                  (v) => setFiltroLocal("tipoDeVaga", v),
                  dropdownAberto === "tipo",
                  "tipo"
                )}
              </div>

              <div className="col-12 mb-3">
                {renderDropdown(
                  "Área profissional",
                  areasProfissionais,
                  filtrosLocais.areaProfissional,
                  (v) => setFiltroLocal("areaProfissional", v),
                  dropdownAberto === "area",
                  "area"
                )}
              </div>

              <div className="col-12 mb-3">
                <h6>Cidade</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite sua cidade"
                  value={filtrosLocais.cidade || ""}
                  onChange={(e) => setFiltroLocal("cidade", e.target.value)}
                />
              </div>

              <div className="col-12 mb-3">
                <h6>Estado</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu estado"
                  value={filtrosLocais.estado || ""}
                  onChange={(e) => setFiltroLocal("estado", e.target.value)}
                />
              </div>

              <div className="col-12 text-end">
                <div className="BotaoAplicar">
                  <button
                  className="btn btn w-100 mt-custom"
                  style={{ height: "3.5rem", color: "#fff" }}
                  onClick={aplicar}
                >
                  Aplicar
                </button>  
                </div>
              
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filtros desktop */}
      <div className="formVagas d-none d-md-block" ref={wrapperRef}>
        <div className="container py-4 text-center">
          <h1> Filtre e encontre a melhor vaga para você</h1>
          <motion.div
            className="row mb-3 justify-content-center"
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="col-md-5 col-12">
              {renderDropdown(
                "Tipo de Vaga",
                tiposDeVaga,
                filtrosLocais.tipoDeVaga,
                (v) => setFiltroLocal("tipoDeVaga", v),
                dropdownAberto === "tipo",
                "tipo"
              )}
            </div>

            <div className="col-md-5 col-12">
              {renderDropdown(
                "Área profissional",
                areasProfissionais,
                filtrosLocais.areaProfissional,
                (v) => setFiltroLocal("areaProfissional", v),
                dropdownAberto === "area",
                "area"
              )}
            </div>

            <div className="col-md-5 col-12 mb-3">
              <h6>Cidade</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Digite sua cidade"
                value={filtrosLocais.cidade || ""}
                onChange={(e) => setFiltroLocal("cidade", e.target.value)}
              />
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h6>Estado</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu estado"
                value={filtrosLocais.estado || ""}
                onChange={(e) => setFiltroLocal("estado", e.target.value)}
              />
            </div>

            <div className="col-md-2 col-12 text-end">
              <div className="BotaoAplicar">
                   <button
                className="btn btn w-100 "
                style={{ height: "3.5rem", color: "#fff" }}
                onClick={aplicar}
              >
                Aplicar
              </button>
              </div>
           
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
