// app/components/Sections/VagasSection.jsx
"use client";

import { useState, useEffect } from "react";
import FiltroDeVagas from "../FiltroVagas/FiltroVagas";
import CardVagas from "../Cards/CardVagas";

export default function VagasSection() {
  const [filtros, setFiltros] = useState({
    tipoDeVaga: "1",
    areaProfissional: "1",
    cidade: "",
    estado: "",
    vaga: "",
  });

  const [vagas, setVagas] = useState([]);
 
useEffect(() => {
  async function fetchVagas() {
    try {
      const res = await fetch("/api/vagas");
      const data = await res.json();
      console.log("Vagas recebidas:", data); // <-- Adicione isto

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


  const aplicarFiltros = (filtrosAtualizados) => {
    setFiltros(filtrosAtualizados);
  };

const vagasFiltradas = vagas.filter((vaga) => {
 const tipoOK =
  filtros.tipoDeVaga === "1" || vaga.tipoDeVaga?.toLowerCase() === filtros.tipoDeVaga.toLowerCase();
const areaOK =
  filtros.areaProfissional === "1" || vaga.area?.toLowerCase() === filtros.areaProfissional.toLowerCase();

  const cidadeOK =
    !filtros.cidade ||
    vaga.endereco?.toLowerCase().includes(filtros.cidade.toLowerCase());
  const estadoOK =
    !filtros.estado ||
    vaga.estado?.toLowerCase().includes(filtros.estado.toLowerCase());
  const vagaOK =
    !filtros.vaga ||
    vaga.titulo?.toLowerCase().includes(filtros.vaga.toLowerCase());

  return tipoOK && areaOK && cidadeOK && estadoOK && vagaOK;
});


  return (
    <>
      <FiltroDeVagas filtros={filtros} onAplicarFiltros={aplicarFiltros} />
      <div className="row">
        <div className="col-md-12 mt-4 mb-4 ">
          <h1
            style={{
              color: "#fff",
              fontWeight: "500",
              fontSize: "2.5rem",
              display: "flex",
  
              justifyContent: "center",
            }}
          >
            Conheça nossas vagas
          </h1>
        </div>
      </div>
      <CardVagas vagas={vagasFiltradas} />
    </>
  );
}
