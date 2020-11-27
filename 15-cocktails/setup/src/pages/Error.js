import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-center">
        <h1>Oooop!這裡沒有東西</h1>
        <Link to="/" className="btn btn-primary">
          回首頁
        </Link>
      </div>
    </section>
  )
}

export default Error
