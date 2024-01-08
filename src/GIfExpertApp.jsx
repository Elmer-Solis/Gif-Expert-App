import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GIfExpertApp = () => {

  const [categorie, setCategorie] = useState(['Goku']);


  return (
    <>
      <h1>GIfExpertApp</h1>
      <ul>{categorie.map(cat => (
        <AddCategory key={cat} category={categorie} />
      ))}</ul>
    </>
  )
}
