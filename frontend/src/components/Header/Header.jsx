import './Header.css'
import Logo from '../../assets/images/logo.png'
function Header() {
  return (
    <>
      <header>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <h2 id="title-header">Debts Manager</h2>
      </header>
    </>
  )
}

export default Header
