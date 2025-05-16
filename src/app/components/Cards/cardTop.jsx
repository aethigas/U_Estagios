"use client";

import { useState } from "react";
import "./cardTop.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardTop() {
  // Estado para controlar a exibição dos próximos 4 cards
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="container">
      {/* Exibindo os 4 primeiros cards */}

      <div className="Cards1">
        <div className="row">
          <div className="col-md-12  CardVagas">
            <div
              className="card"
              style={{ width: "30rem", height: "26rem", borderRadius: "15px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Estágio</h5>
                <h6 className="decription">Descricao da vaga</h6>
                <p className="card-text TextoCards">
                  <img src="/IconsCards/star.png" alt="estreala" />
                  Administrativa
                  <img src="/IconsCards/location.png" alt="localzação" />
                  Localização de tal
                  <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário de
                  tal
                  <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                  combinar
                </p>
                <a
                  href="#"
                  className="btn btn BotaoCards"
                  style={{ borderColor: "#490E67" }}
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "30rem", height: "26rem", borderRadius: "15px" }}
            >
              <div className="">
                <h5 className="card-title">Estágio</h5>
                <h6 className="decription">Descricao da vaga</h6>
                <p className="card-text TextoCards">
                  <img src="/IconsCards/star.png" alt="estreala" />
                  Administrativa
                  <img src="/IconsCards/location.png" alt="localzação" />
                  Localização de tal
                  <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário de
                  tal
                  <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                  combinar
                </p>
                <a
                  href="#"
                  className="btn btn BotaoCards "
                  style={{ borderColor: "#490E67" }}
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12  CardVagas">
            <div
              className="card"
              style={{ width: "30rem", height: "26rem", borderRadius: "15px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Estágio</h5>
                <h6 className="decription">Descricao da vaga</h6>
                <p className="card-text TextoCards">
                  <img src="/IconsCards/star.png" alt="estreala" />
                  Administrativa
                  <img src="/IconsCards/location.png" alt="localzação" />
                  Localização de tal
                  <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário de
                  tal
                  <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                  combinar
                </p>
                <a
                  href="#"
                  className="btn btn BotaoCards BotaoCards"
                  style={{ borderColor: "#490E67" }}
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{ width: "30rem", height: "26rem", borderRadius: "15px" }}
            >
              <div className="card-body">
                <h5 className="card-title">Estágio</h5>
                <h6 className="decription">Descricao da vaga</h6>
                <p className="card-text TextoCards">
                  <img src="/IconsCards/star.png" alt="estreala" />
                  Administrativa
                  <img src="/IconsCards/location.png" alt="localzação" />
                  Localização de tal
                  <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário de
                  tal
                  <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                  combinar
                </p>
                <a
                  href="#"
                  className="btn btn BotaoCards"
                  style={{ borderColor: "#490E67" }}
                >
                  Ver detalhes
                </a>
              </div>
            </div>

            {/* Aqui termina os 4 primeiros cards */}
          </div>
        </div>
      </div>

      {/* Exibindo mais 4 cards quando showMore for verdadeiro */}
      {showMore && (
        <div className="Cards2">
          <div className="row">
            <div className="col-md-12 CardVagas">
              <div
                className="card"
                style={{
                  width: "30rem",
                  height: "26rem",
                  borderRadius: "15px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Estágio</h5>
                  <h6 className="decription">Descricao da vaga</h6>
                  <p className="card-text TextoCards"> {/*editar texto dos cards */}
                    <img src="/IconsCards/star.png" alt="estreala" />
                    Administrativa
                    <img src="/IconsCards/location.png" alt="localzação" />
                    Localização de tal
                    <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário
                    de tal
                    <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                    combinar
                  </p>
                  <a
                    href="#"
                    className="btn btn BotaoCards"
                    style={{ borderColor: "#490E67" }}
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "30rem",
                  height: "26rem",
                  borderRadius: "15px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Estágio</h5>
                  <h6 className="decription">Descricao da vaga</h6>
                  <p className="card-text TextoCards"> {/*editar texto dos cards */}
                    <img src="/IconsCards/star.png" alt="estreala" />
                    Administrativa
                    <img src="/IconsCards/location.png" alt="localzação" />
                    Localização de tal
                    <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário
                    de tal
                    <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                    combinar
                  </p>
                  <a
                    href="#"
                    className="btn btn BotaoCards"
                    style={{ borderColor: "#490E67" }}
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 CardVagas">
              <div
                className="card"
                style={{
                  width: "30rem",
                  height: "26rem",
                  borderRadius: "15px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title">Estágio</h5>
                  <h6 className="decription">Descricao da vaga</h6>
                  <p className="card-text TextoCards"> {/*editar texto dos cards */}
                    <img src="/IconsCards/star.png" alt="estreala" />
                    Administrativa
                    <img src="/IconsCards/location.png" alt="localzação" />
                    Localização de tal
                    <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário
                    de tal
                    <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                    combinar
                  </p>
                  <a
                    href="#"
                    className="btn btn BotaoCards"
                    style={{ borderColor: "#490E67" }}
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
              <div
                className="card"
                style={{
                  width: "30rem",
                  height: "26rem",
                  borderRadius: "15px",
                }}
              >
               <div className="card-body">
                  <h5 className="card-title">Estágio</h5>
                  <h6 className="decription">Descricao da vaga</h6>
                   <p className="card-text TextoCards"> {/*editar texto dos cards */}
                    <img src="/IconsCards/star.png" alt="estreala" />
                    Administrativa
                    <img src="/IconsCards/location.png" alt="localzação" />
                    Localização de tal
                    <img src="/IconsCards/clock-4.png" alt="relógio" /> Horário
                    de tal
                    <img src="/IconsCards/dollar-circle.png" alt="dollar" /> A
                    combinar
                  </p>
                  <a
                    href="#"
                    className="btn btn BotaoCards"
                    style={{ borderColor: "#490E67" }}
                  >
                    Ver detalhes
                  </a>
                </div>
              </div>
              {/* Aqui terminam os 4 novos cards */}
            </div>
          </div>
        </div>
      )}

      {/* Botão para alternar entre mostrar mais ou menos */}
      <div className="text-center mt-3 BotaoVerMais">
        <button className="btn btn-" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Ver Menos" : "Ver Mais"}
        </button>
      </div>
    </section>
  );
}
