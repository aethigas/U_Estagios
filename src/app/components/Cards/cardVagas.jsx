"use client";

import { useState, useEffect } from "react";
import "./CardVagas.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardVagas() {
  const [vagas, setVagas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [modalVisible, setModalVisible] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);

  // // Carregar as vagas da API (simulação de fetch)
  // useEffect(() => {
  //   // Simulação de chamada à API para buscar as vagas
  //   fetch("http://jsonplaceholder.typicode.com/vagas") // Altere para a URL real da sua API
  //     .then((res) => res.json())
  //     .then((data) => setVagas(data))
  //     .catch((err) => console.error("Erro ao carregar vagas:", err));
  // }, []);

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

  const handleToggle = (action) => {
    if (action === "more" && visibleCount < vagas.length) {
      setVisibleCount((prev) => Math.min(prev + 6, vagas.length));
    } else if (action === "less" && visibleCount > 6) {
      setVisibleCount((prev) => Math.max(prev - 6, 6));
    }
  };

  const abrirModal = (vaga) => {
    setVagaSelecionada(vaga);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setVagaSelecionada(null);
  };

  return (
    <section className="background ">
      <div className="container">
        <div className="row">
           <div className="col-md-12 mt-5 mb-4 ConhecaVagas ">
          <h1>Conheça nossas vagas</h1>
        </div>
        </div>
       
        
        <div className="Cards">
          <div className="row">
            <div className="col-md-12 mb-5 CardVagas d-flex flex-wrap justify-content-center">
              {vagas.slice(0, visibleCount).map((vaga, index) => (
                <div key={index} className="card m-2 mt-3 mb-2 custom-card">
                  <div className="card-body">
                    <h5 className="card-title">{vaga.titulo}</h5>
                    <h6 className="decription">{vaga.descricao}</h6>
                    <div className="card-text TextoCards">
                      <div className="card-info-item">
                        <img src="/IconsCards/str.png" alt="estrela" />{" "}
                        {vaga.area}
                      </div>
                      <div className="card-info-item">
                        <img src="/IconsCards/locatn.png" alt="localização" />{" "}
                        {vaga.localizacao}
                      </div>
                      <div className="card-info-item">
                        <img src="/IconsCards/clo-4.png" alt="relógio" />{" "}
                        {vaga.horario}
                      </div>
                      <div className="card-info-item">
                        <img src="/IconsCards/doll-circle.png" alt="dólar" />{" "}
                        {vaga.salario}
                      </div>
                    </div>
                    <button
                      onClick={() => abrirModal(vaga)}
                      className="btn btn BotaoCards mt-2 "
                      style={{
                        borderColor: "#17a2b8",
                        color: "#000",
                        border: "2px solid #17a2b8",
                      }}
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Modal em React */}
        {modalVisible && vagaSelecionada && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content ">
                <div className="modal-header BotaoXModal">
                  <button
                    type="button"
                    className="btn-close "
                    onClick={fecharModal}
                  ></button>
                </div>

                <div className="modal-body ConteudoModal">
                  <h5 className="modal-title">{vagaSelecionada.titulo}</h5>
                  <h6 className="decription">{vagaSelecionada.descricao}</h6>
                  <p>
                    <img src="/IconsCards/star.png" alt="estrela" />{" "}
                    {vagaSelecionada.area}
                  </p>
                  <p>
                    <img src="/IconsCards/location.png" alt="localização" />{" "}
                    {vagaSelecionada.localizacao}
                  </p>
                  <p>
                    <img src="/IconsCards/clock-4.png" alt="relógio" />{" "}
                    {vagaSelecionada.horario}
                  </p>
                  <p>
                    <img src="/IconsCards/dollar-circle.png" alt="dólar" />{" "}
                    {vagaSelecionada.salario}
                  </p>

                  {/* Area de atividades que deverao ser exercidas */}
                  <div className="mb-3">
                    <label className="form-label">
                      <strong>Atividades</strong>
                    </label>
                    <ul>
                      {vagaSelecionada.atividades?.map((atividade, index) => (
                        <li key={index}>{atividade}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Area de requisitos para a vaga */}
                  <div className="mb-2">
                    <label className="form-label">
                      <strong>Requisitos</strong>
                    </label>
                    <ul>
                      {vagaSelecionada.requisitos?.map((requisito, index) => (
                        <li key={index}>{requisito}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="BotaoModal">
                  <button
                    type="button"
                    className="btn btn"
                    style={{
                      borderColor: "20c997",
                      width: "20rem",
                      border: "2px solid #17a2b8",
                      color: "#000",
                      textDecoration: "none", // Garantir que o link não tenha sublinhado
                    }}
                  >
                    <Link
                      href="/"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Tenho Interesse
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Botões Ver Mais e Ver Menos */}
        <div className="text-center mt-3 BotaoVerMais">
          {visibleCount < vagas.length && (
            <button
              className="btn btn"
              onClick={() => {
                setTimeout(() => handleToggle("more"), 1000); // 1000 ms = 1 segundo
              }}
            >
              Carregar mais
            </button>
          )}

          {/* {visibleCount > 4 && (
          <button className="btn btn BotaoVerMenos ml-8" onClick={() => handleToggle("less")}>
            Ver Menos
          </button>
        )} */}
        </div>
      </div>
    </section>
  );
}
