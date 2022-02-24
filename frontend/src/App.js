import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import GlobalStyle from './styles/global.js'
import Router from './router.js'

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
