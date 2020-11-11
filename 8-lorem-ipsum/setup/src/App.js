import React, { useState } from "react"
import data from "./data"
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count)
    console.log(typeof amount)
    if (count <= 0) {
      amount = 1
    }
    if (count > data.length + 1) {
      amount = data.length + 1
    }
    setText(data.slice(0, amount))
  }
  return (
    <section className="section-center">
      <h3>自製段落產生器</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">段落</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={e => {
            setCount(e.target.value)
          }}
        />
        <button type="submit" className="btn">
          產生{" "}
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
