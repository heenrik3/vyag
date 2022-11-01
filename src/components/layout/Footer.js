function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column">
        <span className="logo">VYAG</span>

        <span>
          Sempre tentamos fazer nossos clientes felizes provendo sempre muitas e
          as melhores opções possíveis.
        </span>

        <div className="footer__socials">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      <div className="footer__column">
        <span className="footer__title">Sobre</span>

        <span>Sobre nós</span>
        <span>Características</span>
        <span>Novidades</span>
        <span>Menu</span>
      </div>

      <div className="footer__column">
        <span className="footer__title">Empresa</span>

        <span>Porque Vyag?</span>
        <span>Seja parceiro</span>
        <span>FAQ</span>
        <span>Blog</span>
      </div>

      <div className="footer__column">
        <span className="footer__title">Suporte</span>

        <span>Conta</span>
        <span>Centro de Suporte</span>
        <span>Feedback</span>
        <span>Entre em contato</span>
        <span>Acessibilidade</span>
      </div>

      <div className="footer__column">
        <span className="footer__title">Entre em contato</span>

        <span>Perguntas ou feedback? Adoraríamos ouvir o que você pensa.</span>

        <div className="footer__input">
          <input type={'email'} placeholder="Email"></input>
          <button className="btn btn-primary" type="submit">
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
