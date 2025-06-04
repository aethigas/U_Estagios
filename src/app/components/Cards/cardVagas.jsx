"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./CardVagas.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CardVagas({ vagas }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [modalVisible, setModalVisible] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);



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
    <section className="background">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="row">
          <div className="col-md-12 mt-4 mb-4 ConhecaVagas">
            {vagas.length === 0 ? (
              <div className="atronauta">
                <div data-js="astro" className="astronaut">
                  <div className="head"></div>
                  <div className="arm arm-left"></div>
                  <div className="arm arm-right"></div>
                  <div className="body">
                    <div className="panel"></div>
                  </div>
                  <div className="leg leg-left"></div>
                  <div className="leg leg-right"></div>
                  <div className="schoolbag"></div>
                </div>

                <h1> Desculpe! Não encontramos vagas no momento.</h1>
              </div>
            ) : (
              <h1>Conheça nossas vagas</h1>
            )}
          </div>
        </div>

        <div className="Cards">
          <div className="row">
            <div className="col-md-12 mb-5 CardVagas d-flex flex-wrap justify-content-center">
              {vagas.slice(0, visibleCount).map((vaga, index) => (
                <motion.div
                  key={vaga.id || index} // prefira ID, senão índice
                  className="card m-2 mt-3 mb-2 custom-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    duration: 0,
                    delay: Math.min(index, 10) * 0,
                  }}
                >
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
                        {vaga.localizacao} - {vaga.estado}
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
                      className="btn btn BotaoCards mt-2"
                      style={{
                        borderColor: "#148a9d",
                        color: "#000",
                        border: "2px solid #148a9d",
                      }}
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {/* Modal em React */}
        {modalVisible && vagaSelecionada && (
          <motion.div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable"
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
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
                      borderColor: "#148a9d",
                      width: "20rem",
                      border: "2px solid #148a9d",
                      color: "#000",
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botões Ver Mais e Ver Menos */}
      <div className="text-center mt-1 BotaoVerMais">
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
    </section>
  );
}
