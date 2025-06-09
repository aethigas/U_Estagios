'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; 

import { getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardVagas.css';

export default function CardVagas({
  vagas = [],
  exibirModal = true,
  botaoPersonalizado,
  limiteInicial = 6,
}) {
  const [visibleCount, setVisibleCount] = useState(limiteInicial);
  const [modalVisible, setModalVisible] = useState(false);
  const [vagaSelecionada, setVagaSelecionada] = useState(null);

  const router = useRouter();

  const handleToggle = (action) => {
    if (action === 'more' && visibleCount < vagas.length) {
      setVisibleCount((prev) => Math.min(prev + 6, vagas.length));
    } else if (action === 'less' && visibleCount > limiteInicial) {
      setVisibleCount((prev) => Math.max(prev - 6, limiteInicial));
    }
  };

  const abrirModal = (vaga) => {
    if (!exibirModal) return;
    setVagaSelecionada(vaga);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setVagaSelecionada(null);
  };

  const handleTenhoInteresse = () => {
    if (!vagaSelecionada?.id) return;

    const token = getCookie('authorization');
    const redirectPath = `/login?vagaId=${vagaSelecionada.id}`;

    if (!token) {
      router.push(redirectPath);
      return;
    }

    try {
      const user = jwtDecode(token);
      if (user.tipo === 'aluno') {
        router.push(`/aluno/perfil?vagaId=${vagaSelecionada.id}`);
      } else {
        router.push(redirectPath);
      }
    } catch (err) {
      console.error('Erro ao decodificar token:', err);
      router.push(redirectPath);
    }
  };

  return (
    <section className="background">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="row">
          <div className="col-md-12 mt-4 mb-4 ConhecaVagas">
            {vagas.length === 0 && (
              <div className="atronauta">
                <div className="astronaut">
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
                <h1>Desculpe! Não encontramos vagas no momento.</h1>
              </div>
            )}
          </div>
        </div>

        <div className="Cards">
          <div className="row">
            <div className="col-md-12 mb-5 CardVagas d-flex flex-wrap justify-content-center">
              {vagas.slice(0, visibleCount).map((vaga, index) => (
                <motion.div
                  key={vaga.id || index}
                  className="card m-2 mt-3 mb-2 custom-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{vaga.titulo}</h5>
                    <h6 className="decription">{vaga.descricao}</h6>
                    <div className="card-text TextoCards">
                      <div className="card-info-item">
                        <img src="/IconsCards/star.png" alt="Área" /> {vaga.area}
                      </div>
                      <div className="card-info-item">
                        <img src="/IconsCards/location.png" alt="Localização" /> {vaga.endereco} - {vaga.estado}
                      </div>
                      <div className="card-info-item">
                        <img src="/IconsCards/clock.png" alt="Horário" /> {vaga.horario}
                      </div>
                      <div className="card-info-item">
                        <img src="/IconsCards/dollar.png" alt="Salário" /> {vaga.salario}
                      </div>
                    </div>
                    {botaoPersonalizado ? (
                      botaoPersonalizado(vaga)
                    ) : (
                      <button
                        onClick={() => abrirModal(vaga)}
                        className="btn btn BotaoCards mt-2"
                        style={{
                          borderColor: '#148a9d',
                          color: '#000',
                          border: '2px solid #148a9d',
                        }}
                      >
                        Ver Detalhes
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {exibirModal && modalVisible && vagaSelecionada && (
          <motion.div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable"
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 0 }}
              transition={{ duration: 0 }}
            >
              <div className="modal-content">
                <div className="modal-header BotaoXModal">
                  <button type="button" className="btn-close" onClick={fecharModal}></button>
                </div>
                <div className="modal-body ConteudoModal">
                  <h5 className="modal-title">{vagaSelecionada.titulo}</h5>
                  <h6 className="decription">{vagaSelecionada.descricao}</h6>
                  <p><img src="/IconsCards/star.png" alt="Área" /> {vagaSelecionada.area}</p>
                  <p><img src="/IconsCards/location.png" alt="Endereço" /> {vagaSelecionada.endereco}</p>
                  <p><img src="/IconsCards/clock.png" alt="Horário" /> {vagaSelecionada.horario}</p>
                  <p><img src="/IconsCards/dollar.png" alt="Salário" /> {vagaSelecionada.salario}</p>
                  <div className="mb-3">
                    <strong>Atividades</strong>
                    <ul>
                      {(vagaSelecionada.atividades || []).map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <strong>Requisitos</strong>
                    <ul>
                      {(vagaSelecionada.requisitos || []).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="BotaoModal">
                  <button
                    type="button"
                    onClick={handleTenhoInteresse}
                    className="btn btn"
                    style={{
                      borderColor: '#148a9d',
                      width: '20rem',
                      border: '2px solid #148a9d',
                      color: '#000',
                    }}
                  >
                    Tenho Interesse
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mt-1 BotaoVerMais">
        {visibleCount < vagas.length && (
          <button className="btn btn" onClick={() => handleToggle('more')}>
            Carregar mais
          </button>
        )}
      </div>
    </section>
  );
}
