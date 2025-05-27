"use client";

import { useState, useEffect, useRef } from "react";
import "./FiltroVagas.css";
import "bootstrap/dist/css/bootstrap.min.css";

const tiposDeVaga = [
  { id: "1", nome: "Todas" },
  { id: "2", nome: "Aprendiz" },
  { id: "3", nome: "Estágio" },

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
  // Estado para armazenar os valores dos filtros
  const [filtrosLocais, setFiltrosLocais] = useState({
    tipoDeVaga: "1",
    nivelEnsino: "1",
    areaProfissional: "1",
    cidade: "",
    vaga: "",
  });

  // Estado que guarda qual dropdown está aberto ('tipo', 'nivel', 'area' ou null)
  const [dropdownAberto, setDropdownAberto] = useState(null);

  // Estado para controle do menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Referência para o container do filtro - usada para detectar cliques fora do componente
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Função que fecha dropdowns e menu se clicar fora do wrapper
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdownAberto(null);  // Fecha qualquer dropdown aberto
        setMenuOpen(false);       // Fecha menu mobile se aberto
      }
    }
    document.addEventListener("mousedown", handleClickOutside); // Registra listener no documento
    return () => document.removeEventListener("mousedown", handleClickOutside); // Remove no cleanup
  }, []);

  // Abre ou fecha o dropdown do filtro clicado (fecha se clicar no aberto)
  const abrirDropdown = (nome) => {
    setDropdownAberto(dropdownAberto === nome ? null : nome);
  };

  // Atualiza o estado local dos filtros (tipoDeVaga, nivelEnsino, etc)
  const setFiltroLocal = (campo, valor) => {
    setFiltrosLocais((prev) => ({ ...prev, [campo]: valor }));
  };

  // Função chamada ao aplicar filtros: aqui pode disparar callback para o pai ou fazer fetch
  const aplicarFiltros = () => {
    console.log("Filtros aplicados:", filtrosLocais); // Exemplo: log dos filtros no console
    setMenuOpen(false);       // Fecha menu mobile após aplicar filtros
    setDropdownAberto(null);  // Fecha dropdown aberto
  };

  // Função para renderizar dropdown customizado (reutilizada para os 3 filtros)
  const renderDropdown = (label, items, selected, onSelect, aberto, labelKey) => (
    <div className="mb-3" style={{ position: "relative" }}>
      <h6>{label}</h6>
      <div
        className="form-select"
        onClick={() => abrirDropdown(labelKey)} // Abre/fecha dropdown ao clicar na caixa
        style={{ cursor: "pointer" }}
      >
        {/* Mostra o nome do item selecionado */}
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
          {/* Lista as opções para seleção */}
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                onSelect(item.id);      // Atualiza filtro selecionado
                abrirDropdown(null);    // Fecha dropdown após seleção
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
          backgroundColor: menuOpen ? "transparent" : "#F1F5F9",
        }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)} // Alterna abertura do menu
          aria-label="Abrir/Fechar filtros"
          style={{
            backgroundColor: "#085f26",
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
          {/* Ícone muda conforme estado do menu */}
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

      {/* Menu de filtros mobile: visível só quando menuOpen true */}
      {menuOpen && (
        <div
          className="formVagas d-md-none"
          ref={wrapperRef} // Ref para detectar clique fora e fechar menu
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
              {/* Renderização dos dropdowns para mobile */}
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
                  "Nível de ensino",
                  niveisEnsino,
                  filtrosLocais.nivelEnsino,
                  (v) => setFiltroLocal("nivelEnsino", v),
                  dropdownAberto === "nivel",
                  "nivel"
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
              {/* Inputs de texto para cidade e código da vaga */}
              <div className="col-12 mb-3">
                <h6>Cidade</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite sua cidade"
                  value={filtrosLocais.cidade}
                  onChange={(e) => setFiltroLocal("cidade", e.target.value)}
                />
              </div>
              <div className="col-12 mb-3">
                <h6>Estado</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu estado "
                  value={filtrosLocais.vaga}
                  onChange={(e) => setFiltroLocal("vaga", e.target.value)}
                />
              </div>
              {/* Botão aplicar filtros no mobile */}
              <div className="col-12 text-end">
                <button
                  className="btn btn w-100 mt-custom"
                  style={{
                    height: "3.5rem",
                   
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
      )}

      {/* Filtros desktop: sempre visíveis em md+ */}
      <div className="formVagas d-none d-md-block" ref={wrapperRef}>
        <div className="container py-4 text-center">
          <div className="row mb-3 justify-content-center">
            {/* Dropdowns desktop */}
            <div className="col-md-3 col-12">
              {renderDropdown(
                "Tipo de Vaga",
                tiposDeVaga,
                filtrosLocais.tipoDeVaga,
                (v) => setFiltroLocal("tipoDeVaga", v),
                dropdownAberto === "tipo",
                "tipo"
              )}
            </div>

            <div className="col-md-3 col-12">
              {renderDropdown(
                "Nível de ensino",
                niveisEnsino,
                filtrosLocais.nivelEnsino,
                (v) => setFiltroLocal("nivelEnsino", v),
                dropdownAberto === "nivel",
                "nivel"
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

            {/* Inputs texto desktop */}
            <div className="col-md-6 col-12 mb-3">
              <h6>Cidade</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Digite sua cidade"
                value={filtrosLocais.cidade}
                onChange={(e) => setFiltroLocal("cidade", e.target.value)}
              />
            </div>

            <div className="col-md-3 col-12 mb-3">
              <h6>Estado</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu estado"
                value={filtrosLocais.vaga}
                onChange={(e) => setFiltroLocal("vaga", e.target.value)}
              />
            </div>

            {/* Botão aplicar filtros desktop */}
            <div className="col-md-2 col-12 text-end">
              <button
                className="btn btn w-100 mt-custom"
                style={{
                  height: "3.5rem",
               
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
    </>
  );
}
