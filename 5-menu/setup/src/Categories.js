import React from "react"

const Categories = ({ categories, filterCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button type="button" key={index} className="filter-btn" onClick={() => filterCategory(item)}>
            {item}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
