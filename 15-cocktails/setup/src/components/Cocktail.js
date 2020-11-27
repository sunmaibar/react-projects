import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>
          {name}
          {glass}
        </h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-detail">
          更多細節
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
