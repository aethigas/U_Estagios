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
  const aplicarFiltros = (filtrosAtualizados) => {
    setFiltros(filtrosAtualizados);
  };

  const vagasFiltradas = vagas.filter((vaga) => {
    const tipoOK = filtros.tipoDeVaga === "1" || vaga.tipoDeVaga === filtros.tipoDeVaga;
    const areaOK = filtros.areaProfissional === "1" || vaga.areaProfissional === filtros.areaProfissional;
    const cidadeOK = !filtros.cidade || vaga.localizacao.toLowerCase().includes(filtros.cidade.toLowerCase());
    const estadoOK = !filtros.estado || (vaga.estado && vaga.estado.toLowerCase().includes(filtros.estado.toLowerCase()));
    const vagaOK = !filtros.vaga || vaga.titulo.toLowerCase().includes(filtros.vaga.toLowerCase());
  
    return tipoOK && areaOK && cidadeOK && estadoOK && vagaOK;
  });
  

  return (
    <>
      <FiltroDeVagas filtros={filtros} onAplicarFiltros={aplicarFiltros} />
      <CardVagas vagas={vagasFiltradas} />
    </>
  );
}
