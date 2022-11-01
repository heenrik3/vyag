function toggleMenu(event) {
  // if (event.type === 'touchstart') event.preventDefault()
  const nav = document.querySelector('nav')
  nav.classList.toggle('active')
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        VYAG
      </a>
      <nav id="nav">
        <button
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          onClick={toggleMenu}
          // onTouchStart={toggleMenu}
        >
          <span id="hamburger"></span>
        </button>
        <ul className="menu" role="menu">
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/planos">Planos</a>
          </li>
          <li>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
