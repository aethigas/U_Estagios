'use client';

import './CarroselPrincipal.css';
import { motion } from 'framer-motion';

export default function CarroselPrincipal() {
  const imagens = ["/paisagem1.webp", "/paisagem2.jpeg", "/paisagem3.webp"];

  return (
    <motion.div
      className="row justify-content-center"
      initial={{ opacity: 0, y: 50 }} // Começa invisível e abaixo
      whileInView={{ opacity: 1, y: 0 }} // Quando entra na tela
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }} // Só anima 1x, quando 20% estiver visível
    >
      <div className="col-md-12">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade carrossel-custom"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {imagens.map((src, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={src}
                  className="d-block custom-img"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
