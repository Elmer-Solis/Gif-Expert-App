import { useState } from "react"


export const GIfExpertApp = () => {

  const [categorie, setCategorie] = useState(['Goku']);


  return (
    <>
      <h1>GIfExpertApp</h1>
      <ul>{categorie.map(cat => (
        <li key={cat} >{cat} </li>
      ))}</ul>
    </>
  )
}
