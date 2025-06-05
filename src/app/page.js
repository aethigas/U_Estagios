


import Header from './components/Layout/Header/Header.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import CarroselPrincipal from './components/Carrosel/CarroselPrincipal.jsx'
import VagasSection from './components/Sections/VagasSection.jsx'
import FaleConosco from './components/Forms/FaleConosco/FaleConosco.jsx'
import CardInformacoes from './components/Cards/cardInformacoes.jsx'
import EstrelasCaindo from './components/EstrelasFundo/EstrelasCaindo.jsx'
import FacaSeuFurturo from './components/FacaSeuFuturo/FacaSeufuturo.jsx'
import './home.css'








export default function Home() {
  return (
    <>
      <EstrelasCaindo />

      <Header/>
      
      <FacaSeuFurturo/>
      {/* <VitrineDeVagas/> */}
{/* <CarroselPrincipal /> */}

      <VagasSection />
      <CardInformacoes />
      <FaleConosco />
      {/* <Footer /> */}
    </>
  )
}
