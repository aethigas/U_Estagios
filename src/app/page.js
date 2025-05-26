import Header from './components/Header/Header'
import CardVagas from './components/Cards/cardVagas'
import FiltroDeVagas from './components/FiltroVagas/FiltroVagas'
import Footer from './components/Footer/Footer'
import CardInformacoes from './components/Cards/cardInformacoes'
// import styles from './home.module.css'
// se for css module, renomeie para home.module.css

export default function Home() {
  return (
    <>
      <Header />
      {/* <CardInformacoes /> */}
      <FiltroDeVagas />
      <CardVagas />
      {/* <Footer /> */}
    </>
  )
}
