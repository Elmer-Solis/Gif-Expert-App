import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GIfExpertApp = () => {

  const [categorie, setCategorie] = useState(['Goku']);

  const onAddCategory = (val) => {
    console.log(val);
    setCategorie(c => [...c, val])
  }

  return (
    <>
      <h1>GIfExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />


      <ul>{categorie.map(cat => (
        <li key={cat}>{cat} </li>
      ))}</ul>
    </>
  )
}
