import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifItem } from "./components/GifItem";

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
        <GifItem key={cat} categorie={cat} />
      ))}</ul>
    </>
  )
}
