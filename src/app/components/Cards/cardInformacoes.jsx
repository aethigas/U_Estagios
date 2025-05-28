import './CardInformacoes.css';

export default function CardInformacoes() {
    return (
        <div className="container-card-informacoes">
            <div className="row">
                
                
                <div className="col-md-12 d-flex flex-wrap justify-content-center" style={{ gap: '2rem' }}>
                    <div className="CardStyle">
                        <img src="/" className="CardImg" alt="..." />
                        <div className="CardTexto">
                            <h1>Empresa</h1>
                            <p>Precisando de Jovem Aprendiz e/ou Estagiário para sua empresa?
                                Clique aqui.
                            </p>
                        </div>
                    </div>
                    <div className="CardStyle">
                        <img src="/" className="CardImg" alt="..." />
                        <div className="CardTexto">
                            <h1>Instituições</h1>
                            <p>Leve tudo que temos a oferecer para sua instituição de ensino.</p>
                        </div>
                    </div>
                    <div className="CardStyle">
                        <img src="/" className="CardImg" alt="..." />
                        <div className="CardTexto">
                            <h1>Estudante</h1>
                            <p>Vagas de estágio espalhadas por todo o Brasil.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
