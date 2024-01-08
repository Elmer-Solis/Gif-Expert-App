import { useEffect, useState } from "react"
import { getGifs } from "./helpers/getGifs";

export const GifItem = ({ categorie }) => {

    const [images, setImages] = useState([])

    const resImagenesApi = async () => {
        const data = await getGifs(categorie);
        console.log(data);
    }

    useEffect(() => {
        resImagenesApi()
    }, [])



    return (
        <div>
            <h3>{categorie} </h3>


        </div>
    )
}
