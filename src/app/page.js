import Header from './components/Layout/Header/Header.jsx'
import CardVagas from './components/Cards/CardVagas.jsx'
import FiltroDeVagas from './components/FiltroVagas/FiltroVagas.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import CardInformacoes from './components/Cards/CardInformacoes.jsx'
import CarroselPrincipal from './components/Carrosel/CarroselPrincipal.jsx'
import FaleConosco from './components/Forms/FaleConosco/FaleConosco.jsx'

export default function Home() {
  return (
    <>
      <Header />
      {/* <CarroselPrincipal/> */}
      <CardInformacoes />
      <FiltroDeVagas />
      <CardVagas />
      <FaleConosco/>
      {/* <Footer /> */}
    </>
  )
}
