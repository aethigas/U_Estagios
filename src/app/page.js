import React from 'react'


import Header from './components/Layout/Header/Header.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import CarroselPrincipal from './components/Carrosel/CarroselPrincipal.jsx'
import VagasSection from './components/Sections/VagasSection.jsx'
import FaleConosco from './components/Forms/FaleConosco/FaleConosco.jsx'
import CardInformacoes from './components/Cards/cardInformacoes.jsx'
import './home.css'

// Componente React que cria estrelas caindo infinitamente no fundo da tela
function EstrelasCaindo() {
  const starsCount = 1000; // Define quantas estrelas serão criadas
  const stars = [];      // Array onde vamos armazenar os elementos JSX das estrelas

  // Função auxiliar para gerar um número aleatório entre dois valores
  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Loop para criar cada estrela com estilos e animações únicos
  for (let i = 0; i < starsCount; i++) {
    const left = randomRange(0, 100);         // Posição horizontal da estrela em % da largura da tela (vw)
    const delay = randomRange(0, 5);          // Tempo para começar a animação (efeito de estrelas surgindo em momentos diferentes)
    const duration = randomRange(7, 14);      // Tempo que a estrela leva para cair completamente
    const size = Math.random() < 0.9 
      ? randomRange(0.5, 1.5)                // 90% das estrelas são pequenas
      : randomRange(2, 3);                   // 10% são um pouco maiores (estrelas mais próximas)
    const startTop = `-${randomRange(1, 20)}vh`; // Começa fora da tela (acima do topo)
    const opacity = randomRange(0.3, 0.8);       // Define opacidade (mais realista, estrelas mais distantes = mais fracas)

    // Adiciona uma <div> representando uma estrela com animação de queda
    stars.push(
      <div
        key={i} // Chave única para o React
        className="star" // Classe para estilização (opcional, não usada no inline aqui)
        style={{
          position: 'absolute',         // Posicionamento absoluto para cada estrela
          left: `${left}vw`,            // Posição horizontal aleatória
          top: startTop,                // Posição vertical inicial acima da tela
          width: `${size}px`,           // Largura da estrela
          height: `${size}px`,          // Altura da estrela
          borderRadius: '50%',          // Deixa ela redonda (círculo)
          backgroundColor: 'white',     // Cor branca (como uma estrela)
          opacity,                      // Opacidade aleatória
          pointerEvents: 'none',        // Permite clicar nos elementos abaixo normalmente
          animationName: 'fall',        // Nome da animação definida no CSS
          animationTimingFunction: 'linear', // Movimento constante
          animationIterationCount: 'infinite', // Animação se repete para sempre
          animationDelay: `${delay}s`,        // Atraso inicial aleatório
          animationDuration: `${duration}s`,  // Duração da animação
          boxShadow: `0 0 ${size * 2}px white`, // Adiciona um "brilho" ao redor da estrela
        }}
      />
    );
  }

  // Retorna um contêiner fixo cobrindo toda a tela, com as estrelas dentro
  return (
    <div
      className="box-of-stars"
      style={{
        position: 'fixed',     // Sempre preso à tela, mesmo com rolagem
        top: 0,
        left: 0,
        width: '100vw',        // Largura total da tela
        height: '100vh',       // Altura total da tela
        pointerEvents: 'none', // Permite interação com o conteúdo abaixo
        zIndex: -1,            // Fica atrás de todos os outros elementos
        overflow: 'visible',   // Permite que as estrelas comecem fora da tela
      }}
    >
      {stars} {/* Renderiza todas as estrelas */}
    </div>
  );
}
function VitrineDeVagas() {


  return (
    <div 
      className="container Vitrine" 
    
        >
          <h1>Vitrine de Vagas</h1>
      
    </div>
  );
}


export default function Home() {
  return (
    <>
      <EstrelasCaindo />

      <Header />
      <CarroselPrincipal />
      <VitrineDeVagas/>

      <VagasSection />
      <CardInformacoes />
      <FaleConosco />
      {/* <Footer /> */}
    </>
  )
}
