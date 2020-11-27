import React from "react"
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./context"

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>共啥毀ㄌ一ㄚ</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic ipsum magni ipsa adipisci provident omnis quod odit autem, eos obcaecati delectus assumenda mollitia sit.</p>
          <button className="btn">Start from here</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
