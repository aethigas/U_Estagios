"use client";

import { useState, useEffect } from "react";
import "./cardTop.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardTop() {
  const [vagas, setVagas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
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
        titulo: "Estágio ",
        descricao: "Auxiliar nas redes sociais",
        area: "Marketing ",
        localizacao: "São Paulo, SP",
        horario: "08h às 14h",
        salario: "R$ 1.000,00",
        atividades: [
          "Criar postagens para Instagram e Facebook",
          "Agendar conteúdos via ferramentas como Buffer",
          "Interagir com seguidores",
          "Monitorar engajamento e alcance",
        ],
        requisitos: [
          "Conhecimento básico em redes sociais",
          "Familiaridade com ferramentas como Canva",
          "Boa comunicação escrita",
        ],
      },
      {
        titulo: "Estágio ",
        descricao: "Auxiliar nas redes sociais",
        area: "Marketing",
        localizacao: "São Paulo, SP",
        horario: "08h às 14h",
        salario: "R$ 1.000,00",
        atividades: [
          "Acompanhar campanhas de mídia paga",
          "Criar textos para legendas e anúncios",
          "Analisar dados de alcance e conversão",
          "Colaborar com equipe de criação",
        ],
        requisitos: [
          "Interesse em marketing digital",
          "Boa escrita e criatividade",
          "Noções de redes sociais",
        ],
      },
      {
        titulo: "Estágio ",
        descricao: "Suporte técnico interno",
        area: "Tecnologia da Informação",
        localizacao: "Remoto",
        horario: "13h às 19h",
        salario: "A combinar",
        atividades: [
          "Atender chamados via sistema interno",
          "Realizar configurações básicas de rede",
          "Instalar e atualizar softwares",
          "Fornecer suporte remoto para colaboradores",
        ],
        requisitos: [
          "Noções de redes e hardware",
          "Conhecimento básico em Windows",
          "Capacidade de atendimento remoto",
        ],
      },
      {
        titulo: "Estágio",
        descricao: "Apoio ao recrutamento",
        area: "Recursos Humanos",
        localizacao: "Curitiba, PR",
        horario: "09h às 15h",
        salario: "R$ 900,00",
        atividades: [
          "Realizar triagem de currículos",
          "Agendar entrevistas com candidatos",
          "Atualizar planilhas de processos seletivos",
          "Auxiliar na comunicação com gestores",
        ],
        requisitos: [
          "Organização e atenção a detalhes",
          "Proatividade",
          "Interesse pela área de RH",
        ],
      },
      {
        titulo: "Estágio",
        descricao: "Criação de peças gráficas",
        area: "Design",
        localizacao: "Porto Alegre, RS",
        horario: "10h às 16h",
        salario: "R$ 1.100,00",
        atividades: [
          "Criar layouts para posts e banners",
          "Ajustar materiais conforme identidade visual",
          "Preparar arquivos para impressão",
          "Colaborar com equipe de marketing",
        ],
        requisitos: [
          "Conhecimento básico em Photoshop ou Illustrator",
          "Criatividade",
          "Noções de design gráfico",
        ],
      },
    ];

    setVagas(mockVagas);
  }, []);

  const handleToggle = (action) => {
    if (action === "more" && visibleCount < vagas.length) {
      setVisibleCount((prev) => Math.min(prev + 4, vagas.length));
    } else if (action === "less" && visibleCount > 4) {
      setVisibleCount((prev) => Math.max(prev - 4, 4));
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
    <section className="container">
      <div className="Cards">
        <div className="row">
          <div className="col-md-12 CardVagas d-flex flex-wrap justify-content-center">
            {vagas.slice(0, visibleCount).map((vaga, index) => (
              <div
                key={index}
                className="card m-3"
                style={{
                  width: "35rem",
                  height: "24rem",
                  borderRadius: "13px",
                  backgroundColor: "#fff",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">{vaga.titulo}</h5>
                  <h6 className="decription">{vaga.descricao}</h6>
                  <div className="card-text TextoCards">
                    <div className="card-info-item">
                      <img src="/IconsCards/star.png" alt="estrela" />{" "}
                      {vaga.area}
                    </div>
                    <div className="card-info-item">
                      <img src="/IconsCards/location.png" alt="localização" />{" "}
                      {vaga.localizacao}
                    </div>
                    <div className="card-info-item">
                      <img src="/IconsCards/clock-4.png" alt="relógio" />{" "}
                      {vaga.horario}
                    </div>
                    <div className="card-info-item">
                      <img src="/IconsCards/dollar-circle.png" alt="dólar" />{" "}
                      {vaga.salario}
                    </div>
                  </div>
                  <button
                    onClick={() => abrirModal(vaga)}
                    className="btn btn BotaoCards mt-3"
                    style={{
                      borderColor: "#085f26",
                      color: "#085f26",
                      border: "2px solid #085f26",
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
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
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
                <div className="mb-3">
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
                    borderColor: "#085f26",
                    width: "20rem",
                    border: "2px solid #085f26",
                    color: "#085f26",
                    textDecoration: "none", // Garantir que o link não tenha sublinhado
                  }}
                >
                  <Link
                    href="/Login"
                    style={{ textDecoration: "none", color: "#085f26" }}
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
            Ver Mais
          </button>
        )}

        {/* {visibleCount > 4 && (
          <button className="btn btn BotaoVerMenos ml-8" onClick={() => handleToggle("less")}>
            Ver Menos
          </button>
        )} */}
      </div>
    </section>
  );
}
