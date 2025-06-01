import React from 'react';

export default function VagaEmpresaCard({ vaga, contexto, abrirModal, onEditar, onExcluir }) {
  return (
    <div className="card">
      <h6 className="decription">{vaga.descricao}</h6>
      <div className="card-text TextoCards">
        <div className="card-info-item">
          <img src="/IconsCards/str.png" alt="estrela" /> {vaga.area}
        </div>
        <div className="card-info-item">
          <img src="/IconsCards/locatn.png" alt="localização" /> {vaga.localizacao} - {vaga.estado}
        </div>
        <div className="card-info-item">
          <img src="/IconsCards/clo-4.png" alt="relógio" /> {vaga.horario}
        </div>
        <div className="card-info-item">
          <img src="/IconsCards/doll-circle.png" alt="dólar" /> {vaga.salario}
        </div>
      </div>

      {contexto === 'cliente' && (
        <button
          onClick={() => abrirModal?.(vaga)}
          className="btn BotaoCards mt-2"
          style={{
            borderColor: "#263a89",
            color: "#000",
            border: "2px solid #263a89",
          }}
        >
          Ver Detalhes
        </button>
      )}

      {contexto === 'empresa' && (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <button className="btn btn-outline-primary" onClick={() => onEditar?.(vaga.id)}>
            Editar
          </button>
          <button className="btn btn-outline-danger" onClick={() => onExcluir?.(vaga.id)}>
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}
