"use client"; // Habilita o uso de hooks no componente (Next.js app router)

import { useState, useEffect } from "react";
import FiltroDeVagas from "../FiltroVagas/FiltroVagas"; // Componente que exibe os filtros visuais
import CardVagas from "../Cards/CardVagas"; // Componente que exibe as vagas em formato de card

export default function VagasSection() {
  // Estado para guardar os filtros selecionados pelo usuário
  const [filtros, setFiltros] = useState({
    tipoDeVaga: "1",          // "1" = Todas
    areaProfissional: "1",    // "1" = Todas
    cidade: "",               // Campo de cidade digitado
    estado: "",               // Campo de estado digitado
    vaga: "",                 // Busca por título da vaga
  });

  // Lista fixa com os tipos de vaga disponíveis
  const tipoDevaga = [
    { id: "1", nome: "Todas" },
    { id: "2", nome: "Aprendiz" },
    { id: "3", nome: "Estágio" },
    { id: "4", nome: "CLT" },
  ];

  // Lista fixa com áreas profissionais
  const areasProfissionais = [
    { id: "1", nome: "Todas" },
    { id: "2", nome: "Tecnologia" },
    { id: "3", nome: "Enfermagem" },
    { id: "4", nome: "Engenharia" },
    { id: "5", nome: "Administração" },
  ];

  // Estado que armazena as vagas carregadas da API
  const [vagas, setVagas] = useState([]);

  // Hook para carregar as vagas quando o componente for montado
  useEffect(() => {
    async function fetchVagas() {
      try {
        // Requisição para a rota da API que retorna as vagas
        const res = await fetch("/api/vagas");
        const data = await res.json();
        console.log("Vagas recebidas:", data);

        // Formata os campos de atividades e requisitos (quebrando por vírgula)
        const vagasFormatadas = data.map((vaga) => ({
          ...vaga,
          atividades: vaga.atividades?.split(",") || [],
          requisitos: vaga.requisitos?.split(",") || [],
        }));

        // Atualiza o estado com as vagas formatadas
        setVagas(vagasFormatadas);
      } catch (error) {
        console.error("Erro ao buscar vagas:", error);
      }
    }

    fetchVagas(); // Chama a função ao montar
  }, []);

  // Atualiza os filtros quando o usuário os modifica
  const aplicarFiltros = (filtrosAtualizados) => {
    setFiltros(filtrosAtualizados);
  };

  // Aplica os filtros às vagas carregadas
  const vagasFiltradas = vagas.filter((vaga) => {
    // Busca o nome correspondente ao tipo de vaga selecionado
    const tipoSelecionado = tipoDevaga.find((t) => t.id === filtros.tipoDeVaga)?.nome || "";

    // Busca o nome correspondente à área selecionada
    const areaSelecionada = areasProfissionais.find((a) => a.id === filtros.areaProfissional)?.nome || "";

    // Verifica se o tipo da vaga corresponde ao filtro (ou se é "Todas")
    const tipoOK =
      filtros.tipoDeVaga === "1" ||
      vaga.tipoDeVaga?.toLowerCase() === tipoSelecionado.toLowerCase();

    // Verifica se a área da vaga corresponde ao filtro (ou se é "Todas")
    const areaOK =
      filtros.areaProfissional === "1" ||
      vaga.area?.toLowerCase() === areaSelecionada.toLowerCase();

    // Verifica se a cidade (endereço) da vaga inclui o filtro digitado
    const cidadeOK =
      !filtros.cidade ||
      vaga.endereco?.toLowerCase().includes(filtros.cidade.toLowerCase());

    // Verifica se o estado da vaga inclui o filtro digitado
    const estadoOK =
      !filtros.estado ||
      vaga.estado?.toLowerCase().includes(filtros.estado.toLowerCase());

    // Verifica se o título da vaga inclui o termo digitado
    const vagaOK =
      !filtros.vaga ||
      vaga.titulo?.toLowerCase().includes(filtros.vaga.toLowerCase());

    // Só retorna as vagas que passarem em todos os filtros
    return tipoOK && areaOK && cidadeOK && estadoOK && vagaOK;
  });

  // Renderização da interface
  return (
    <>
      {/* Componente visual com campos de filtro */}
      <FiltroDeVagas filtros={filtros} onAplicarFiltros={aplicarFiltros} />

      {/* Título da seção */}
      <div className="row">
        <div className="col-md-12 mt-4 mb-4">
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

      {/* Componente que renderiza as vagas filtradas */}
      <CardVagas vagas={vagasFiltradas} />
    </>
  );
}
