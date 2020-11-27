import React from "react"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
import MainTitle from "../components/MainTitle"

const Home = () => {
  return (
    <main>
      <MainTitle />
      <SearchForm />
      <CocktailList />
    </main>
  )
}

export default Home
