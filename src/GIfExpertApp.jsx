import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
import { GifButoon } from "./components/GifButoon";


export const GIfExpertApp = () => {

  const [categorie, setCategorie] = useState([]);

  const onAddCategory = (val) => {
    // console.log(val);
    setCategorie(c => [val, ...c])
  }

  const onClearCategory = (value) => {
    console.log(value);
    setCategorie(value);
  }

  return (
    <>
      <h1>GIfExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />
      <GifButoon onClearCategory={onClearCategory} />

      <ul>{categorie.map(cat => (
        <GifGrid key={cat} categorie={cat} />
      ))}</ul>
    </>
  )
}
