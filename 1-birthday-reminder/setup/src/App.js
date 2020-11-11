import React, { useState } from "react"
import data from "./data"
import List from "./List"
function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        {people.map(person => {
          const { age, id, image, name } = person
          return <List key={id} {...person} />
        })}

        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
