import './Footer.css'
import { FaRegCopyright } from 'react-icons/fa'

function Footer() {
  return (
    <div className="container footer">
      <footer>
        <div>
          <p>
            Desenvolvido por
            <a
              href="https://www.github.com/davidtmasin"
              title="Acesse meu github"
              target="_blank"
              rel="noreferrer"
            >
              <strong> David Teixeira de Masin</strong>
            </a>
            . 2022, DebtsManager <FaRegCopyright />.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
