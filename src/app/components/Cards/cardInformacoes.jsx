'use client'


import './CardInformacoes.css';
import { motion } from 'framer-motion';

export default function CardInformacoes() {
    return (
        <div className="container-card-informacoes">
            <div className="row">
                <div className="col-md-12 d-flex flex-wrap justify-content-center" style={{ gap: '2rem' }}>
                    {/* Card 1 */}
                    <motion.div
                        className="CardStyle"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img src="/empresa.jpeg" className="CardImg" alt="Empresa" />
                        <div className="CardTexto">
                            <h1>Empresa</h1>
                            <p>Precisando de Jovem Aprendiz e/ou Estagiário para sua empresa? Clique aqui.</p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="CardStyle"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src="/instituicao.jpeg" className="CardImg" alt="Instituições" />
                        <div className="CardTexto">
                            <h1>Instituições</h1>
                            <p>Leve tudo que temos a oferecer para sua instituição de ensino.</p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="CardStyle"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <img src="/imgteste.jpg" className="CardImg" alt="Estudante" />
                        <div className="CardTexto">
                            <h1>Estudante</h1>
                            <p>Vagas de estágio espalhadas por todo o Brasil.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
