"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import animacaoFoguete from "/public/Animacao/AnimacaoFoguete.json";
import "./FaleConosco.css";

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const containerRef = useRef(null);
  const lottieRef = useRef();
  const isInView = useInView(containerRef, { once: false });

  useEffect(() => {
    if (isInView && lottieRef.current) {
      lottieRef.current.stop();
      lottieRef.current.play();
    }
  }, [isInView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const duration = isMobile ? 10 : 1.7;  // mais tempo no mobile, 1.7 para desktop
  // const decolar = isMobile ? 1.5 : 2;


  return (
    <div className="FaleConosco container mt-5 Texto" ref={containerRef}>
      <div className="row ">
        {/* Foguete + texto */}
        <div className="col-12 col-md-8 text-start mb-4">
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={isInView ? { y: -400, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: "relative",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={animacaoFoguete}
              loop={false}
              autoplay={false}
              style={{ height: 500 }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 100 }}
            animate={isInView ? { y: isMobile ? 0 : -270 } : {}}
            transition={{ duration: duration, ease: "easeOut" }}
            className=" ps-md-4 Problemas"
            style={{ alignSelf: "flex-start" }}
          >
            <h1>Tendo problemas ou dúvidas com algum curso?</h1>

            <p>Temos uma equipe especializada preparada para te ajudar!</p>
            <p>Mande sua mensagem e nós responderemos em até 1 hora.</p>
          </motion.div>
        </div>
        <motion.div
          className="col-12 col-md-4 col-md-2 AstronautaDuvida"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src="/astronautas/AstronautaDuvidas.png" alt="localização" />
        </motion.div>

        {/* Formulário */}
        <motion.div
         className="col-12 col-md-4"
         initial={{ x: -300, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{ once: false, amount: 0.1 }}
         transition={{ duration: 1.7, ease: "easeOut" }}
       >
        
            <h1>Fale Conosco</h1>
          

          <form onSubmit={handleSubmit}>
            <div className="form-group Form">
              <input
                className="form-control"
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group Form">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group Form">
              <textarea
                className="form-control"
                name="mensagem"
                placeholder="Digite sua mensagem"
                rows="3"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>

            <div className="BotaoEnviar">
              <button className="btn btn mt-4 mb-3" type="submit">
                Enviar
              </button>
            </div>
          </form>
        
        </motion.div>
      </div>
    </div>
  );
}
