"use client";

import { useState, useEffect } from "react";
import "./cardVagas.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardVagas({ filtros }) {
  const [vagas, setVagas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [modalVisible, setModalVisible] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);

  useEffect(() => {
    const mockVagas = [
      {
        id: "1",
        titulo: "Estágio ",
        descricao: "Auxiliar nas redes sociais",
        area: "Marketing",
        localizacao: "São Paulo",
        horario: "08h às 14h",
        salario: "R$ 1.000,00",
        tipoDeVaga: "3", // Estágio
        nivelEnsino: "3", // Ensino médio
        areaProfissional: "2", // Tecnologia
        atividades: ["Criar postagens", "Agendar conteúdo"],
        requisitos: ["Conhecimento em redes sociais"],
      },
      {
        id: "2",
        titulo: "Estágio TI",
        descricao: "Suporte técnico interno",
        area: "Tecnologia da Informação",
        localizacao: "Remoto",
        horario: "13h às 19h",
        salario: "A combinar",
        tipoDeVaga: "3",
        nivelEnsino: "4", // Técnico
        areaProfissional: "2",
        atividades: ["Suporte remoto", "Instalar software"],
        requisitos: ["Conhecimento em TI"],
      },
      

    ];

    setVagas(mockVagas);
  }, []);

  // ⚠️ Verifique se os filtros estão definidos
  const filtrarVagas = () => {
    if (!filtros) return vagas;

    const { tipoDeVaga, areaProfissional, nivelEnsino, cidade, vaga: codigoVaga } = filtros;

    return vagas.filter((vaga) => {
      const cidadeMatch =
        cidade === "" || vaga.localizacao.toLowerCase().includes(cidade.toLowerCase());
      const tipoMatch = tipoDeVaga === "1" || vaga.tipoDeVaga === tipoDeVaga;
      const areaMatch = areaProfissional === "1" || vaga.areaProfissional === areaProfissional;
      const nivelMatch = nivelEnsino === "1" || vaga.nivelEnsino === nivelEnsino;
      const codigoMatch = codigoVaga === "" || vaga.id === codigoVaga;

      return cidadeMatch && tipoMatch && areaMatch && nivelMatch && codigoMatch;
    });
  };

  const vagasFiltradas = filtrarVagas();

  const abrirModal = (vaga) => {
    setVagaSelecionada(vaga);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setVagaSelecionada(null);
  };

  const handleToggle = (action) => {
    if (action === "more" && visibleCount < vagasFiltradas.length) {
      setVisibleCount((prev) => Math.min(prev + 4, vagasFiltradas.length));
    }
  };

  return (
    <section className="background">
      <div className="container">
        <div className="row">
          {vagasFiltradas.slice(0, visibleCount).map((vaga, index) => (
            <div
              key={index}
              className="card m-3"
              style={{ width: "36rem", height: "24rem", borderRadius: "13px", backgroundColor: "#fff" }}
            >
              <div className="card-body">
                <h5 className="card-title">{vaga.titulo}</h5>
                <h6 className="decription">{vaga.descricao}</h6>
                <div className="card-text TextoCards">
                  <div className="card-info-item">
                    <img src="/IconsCards/star.png" alt="estrela" /> {vaga.area}
                  </div>
                  <div className="card-info-item">
                    <img src="/IconsCards/location.png" alt="localização" /> {vaga.localizacao}
                  </div>
                  <div className="card-info-item">
                    <img src="/IconsCards/clock-4.png" alt="relógio" /> {vaga.horario}
                  </div>
                  <div className="card-info-item">
                    <img src="/IconsCards/dollar-circle.png" alt="dólar" /> {vaga.salario}
                  </div>
                </div>
                <button
                  onClick={() => abrirModal(vaga)}
                  className="btn btn BotaoCards mt-3"
                  style={{ borderColor: "#085f26", color: "#085f26", border: "2px solid #085f26" }}
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {modalVisible && vagaSelecionada && (
          <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header BotaoXModal">
                  <button type="button" className="btn-close" onClick={fecharModal}></button>
                </div>
                <div className="modal-body ConteudoModal">
                  <h5 className="modal-title">{vagaSelecionada.titulo}</h5>
                  <h6 className="decription">{vagaSelecionada.descricao}</h6>
                  <p>
                    <img src="/IconsCards/star.png" alt="estrela" /> {vagaSelecionada.area}
                  </p>
                  <p>
                    <img src="/IconsCards/location.png" alt="localização" /> {vagaSelecionada.localizacao}
                  </p>
                  <p>
                    <img src="/IconsCards/clock-4.png" alt="relógio" /> {vagaSelecionada.horario}
                  </p>
                  <p>
                    <img src="/IconsCards/dollar-circle.png" alt="dólar" /> {vagaSelecionada.salario}
                  </p>

                  <div className="mb-3">
                    <strong>Atividades</strong>
                    <ul>{vagaSelecionada.atividades.map((a, i) => <li key={i}>{a}</li>)}</ul>
                  </div>
                  <div className="mb-2">
                    <strong>Requisitos</strong>
                    <ul>{vagaSelecionada.requisitos.map((r, i) => <li key={i}>{r}</li>)}</ul>
                  </div>
                </div>
                <div className="BotaoModal">
                  <Link href="/Login" className="btn btn" style={{ border: "2px solid #085f26", color: "#085f26", width: "20rem" }}>
                    Tenho Interesse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-3 BotaoVerMais">
          {visibleCount < vagasFiltradas.length && (
            <button className="btn btn" onClick={() => handleToggle("more")}>
              Carregar mais
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
