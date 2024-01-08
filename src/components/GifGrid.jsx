import { useEffect, useState } from "react"
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ categorie }) => {

    const [images, setImages] = useState([])

    const resImagenesApi = async () => {
        const data = await getGifs(categorie);
        console.log(data);
        setImages(data)
    }

    useEffect(() => {
        resImagenesApi()
    }, [])


    return (
        <div className="card-grid">
            <h3>{categorie} </h3>


        </div>
    )
}
