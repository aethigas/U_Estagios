import './cardInformacoes.css';

export default function CardInformacoes() {
    return (
        <div className="container-card-informacoes">
            <div className="row">
                <div className="col-md-12 d-flex flex-wrap justify-content-center" style={{ gap: '3rem' }}>
                    <div className="CardStyle">
                        <img src="/imgteste.jpg" className="CardImg" alt="..." />
                        <div className="CardTexto">
                            <h1>Empresa</h1>
                            <p>Texto de exemplo para a empresa.</p>
                        </div>
                    </div>
                    <div className="CardStyle">
                        <img src="/imgteste.jpg" className="CardImg" alt="..." />
                        <div className="CardTexto">
                            <h1>Instituições</h1>
                            <p>Texto de exemplo para instituições.</p>
                        </div>
                    </div>
                    <div className="CardStyle">
                        <img src="/imgteste.jpg" className="CardImg" alt="..." />
                        <div className="CardTexto">
                            <h1>Estudante</h1>
                            <p>Texto de exemplo para estudantes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
