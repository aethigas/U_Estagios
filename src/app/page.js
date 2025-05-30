import Header from './components/Layout/Header/Header.jsx'
import CardVagas from './components/Cards/CardVagas.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import CarroselPrincipal from './components/Carrosel/CarroselPrincipal.jsx'
import VagasSection from './components/Sections/VagasSection.jsx'
import FaleConosco from './components/Forms/FaleConosco/FaleConosco.jsx'

export default function Home() {
  return (
    <>
      <Header />
      {/* <CardInformacoes /> */}
   
      <VagasSection />
      
      <FaleConosco/>
      {/* <Footer /> */}
    </>
  )
}
