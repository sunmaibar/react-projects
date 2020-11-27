import React, { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { useGlobeContext } from "./context"

const Home = () => {
  const data = useGlobeContext()
  const { openSidebar, openModal } = data
  console.log(data)
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  )
}

export default Home
