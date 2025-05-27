import Header from './components/Layout/Header/Header.jsx'
import CardVagas from './components/Cards/CardVagas.jsx'
import FiltroDeVagas from './components/FiltroVagas/FiltroVagas.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import CardInformacoes from './components/Cards/cardInformacoes.jsx'
import CarroselPrincipal from './components/Carrosel/CarroselPrincipal.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <CarroselPrincipal/>
      <CardInformacoes />
      <FiltroDeVagas />
      <CardVagas />
      {/* <Footer /> */}
    </>
  )
}
