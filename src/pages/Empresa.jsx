import { VagaEmpresaCard } from '../components/VagaEmpresaCard.jsx';

<VagaEmpresaCard
  vaga={vaga}
  contexto="empresa"
  onEditar={(id) => router.push(`/empresa/editar/${id}`)}
  onExcluir={deletarVaga}
/>
