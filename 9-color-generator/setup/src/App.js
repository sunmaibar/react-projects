import React, { useState } from "react"
import SingleColor from "./SingleColor"

import Values from "values.js"

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#f12025").all(10))

  const handleSubmit = e => {
    e.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch {
      setError(true)
      console.log(error)
    }
  }
  return (
    <>
      <section className="container">
        <h3>同色系產生器</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            className={`${error ? "error" : null}`}
            placeholder="#f15025"
            onChange={e => {
              setColor(e.target.value)
            }}
          />
          <button className="btn" type="submit">
            產生色票
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color)
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </>
  )
}

export default App
