import "./FiltroVagas.css";
import "bootstrap/dist/css/bootstrap.min.css";

const areasProfissionais = [
  { id: 1, nome: "Todas" },
  { id: 2, nome: "Tecnologia" },
  { id: 3, nome: "Administração" },
  { id: 4, nome: "Saúde" },
];

export default function FiltroDeVagas() {
  return (
    <div className="container py-4 text-center">
      <div className="col-md-12">
        {/* Filtros */}
        <div className="row mb-3 justify-content-center">
          <div className="col-md-3 col-12 mb-3">
            <div className="TipoDeVaga">
              <select className="form-select" defaultValue="">
                <option value="1">Todas</option>
                <option value="2">Aprendiz</option>
                <option value="3">Estágio</option>
                <option value="4">Processos públicos</option>
              </select>
            </div>
          </div>

          <div className="col-md-3 col-12 mb-3">
            <div className="NivelEnsino">
              <select className="form-select" defaultValue="">
                <option value="1">Todos</option>
                <option value="2">Ensino fundamental</option>
                <option value="3">Ensino médio</option>
                <option value="4">Técnico</option>
                <option value="5">Superior</option>
              </select>
            </div>
          </div>

          <div className="col-md-4 col-12 mb-3">
            <div className="AreaProfissional">
              <select className="form-select" defaultValue="">
                {areasProfissionais.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filtro cidade */}
        <div className="row mb-3 justify-content-center">
          <div className="col-md-4 col-12">
            <div className="Cidade">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite sua cidade"
                  aria-label="Cidade"
                  aria-describedby="button-addon1"
                />
              </div>


              {/* Botão aplicar */}
              <div className="text-end">
                <button type="submit" className="btn btn">
                  Aplicar
                </button>
              </div>
            </div>
            <div className="tal">
                 <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite sua cidade"
                  aria-label="Cidade"
                  aria-describedby="button-addon1"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
