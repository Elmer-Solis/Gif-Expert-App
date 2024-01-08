import { useState } from "react"

export const GifItem = ({ categorie }) => {
    const [images, setImages] = useState([])

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?api_key=WVjdUDGU9uWqVqxf5iYgT2rNT1IPT7oG&q=${categorie}&limit=10`
        const resp = await fetch(url)
        const { data } = await resp.json();
        console.log(data);
    }

    getGifs();

    return (
        <div>
            <h3>{categorie} </h3>


        </div>
    )
}
