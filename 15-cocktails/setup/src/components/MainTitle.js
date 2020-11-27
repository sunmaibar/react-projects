import React from "react"

const MainTitle = () => {
  return (
    <div style={{ display: "flex", border: "1px solid  black", background: "lightGrey" }}>
      <h4 style={{ display: "flex", margin: "0.6rem auto ", padding: "0.1rem" }}>
        此網站為私人開發使用，不過還是要提醒您，<span style={{ color: "red" }}>未滿十八請勿飲酒，酒後請勿開車</span>
      </h4>
    </div>
  )
}

export default MainTitle
