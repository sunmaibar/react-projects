import React, { useState } from "react"
import people from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex(prevIndex => {
      return checkNumber(prevIndex + 1)
    })
  }
  const prevPerson = () => {
    setIndex(prevIndex => {
      return checkNumber(prevIndex - 1)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.random() * people.length
    let floorNumber = Math.floor(randomNumber)
    if (floorNumber === index) {
      floorNumber = checkNumber(index + 1)
    }
    setIndex(floorNumber)
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        隨機挑選
      </button>
    </article>
  )
}

export default Review
