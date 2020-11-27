import React from "react"
import Loading from "../components/Loading"
import { useParams, Link } from "react-router-dom"
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
          const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7 } = data.drinks[0]
          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7]

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className="section-title">沒有能顯示的調酒</h2>
  }

  const { name, image, info, category, glass, instructions, ingredients } = cocktail
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        回首頁
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">名稱:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">種類:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">資訊:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">杯子:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">製程:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">材料:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
