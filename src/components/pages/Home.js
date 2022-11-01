import Card from '../layout/Card'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home page">
      <section className="home__landing home__section">
        <h1 className="home__title home__title--primary">
          Uma Aventura te espera
        </h1>
        <span className="home__title home__title--secondary">
          Embarque agora!
        </span>

        <div className="home__buttons">
          <Link to="/login">
            <button className="btn btn--outlined">entrar</button>
          </Link>
          <Link to="/">
            <button className="btn btn--primary">
              Assista ao vídeo <i className="fa-solid fa-circle-play"></i>
            </button>
          </Link>
        </div>
      </section>

      <section className="home__cards home__section section__hidden">
        <h2>VEJA OS LUGARES INCRÍVEIS AGUARDANDO POR VOCÊ</h2>

        <div className="cards">
          <div className="cards--1">
            <Card
              label="Aventura"
              // src="images/img-1-lazy.jpg"
              src="images/img-1.jpg"
              description="Explore cachoeiras nas profudezas da Amazônia"
            />

            <Card
              label="Aventura"
              // src="images/img-2-lazy.jpg"
              src="images/img-2.jpg"
              description="Viaje por dunas no deserto do Saara"
            />
          </div>
          <div className="cards--2">
            <Card
              label="Mistério"
              // src="images/img-3-lazy.jpg"
              src="images/img-3.jpg"
              description="Visite ilhas Atlânticas desconhecidas"
            />
            <Card
              label="Adrenalina"
              // src="images/img-4-lazy.jpg"
              src="images/img-4.jpg"
              description="Sinta o ponto mais alto do Everest"
            />
            <Card
              label="Adrenalina"
              // src="images/img-5-lazy.jpg"
              src="images/img-5.jpg"
              description="Desbrave o oceano por águas inexploradas"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
