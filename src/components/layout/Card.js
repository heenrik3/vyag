import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="card">
      <Link to="/planos" className="card__link">
        <figure className="card__picture" label={props.label}>
          <img src={props.src}></img>
        </figure>

        <div className="card__details">
          <span className="card__details__description">
            {props.description}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default Card
