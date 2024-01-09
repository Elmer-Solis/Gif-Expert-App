import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GIfExpertApp = () => {

  const [categorie, setCategorie] = useState([]);

  const onAddCategory = (val) => {
    console.log(val);
    setCategorie(c => [val, ...c])
  }

  return (
    <>
      <h1>GIfExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      <ul>{categorie.map(cat => (
        <GifGrid key={cat} categorie={cat} />
      ))}</ul>
    </>
  )
}
