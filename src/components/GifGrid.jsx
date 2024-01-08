import { useEffect, useState } from "react"
import { getGifs } from "./helpers/getGifs";
import { GifItem } from "./GifItem";
export const GifGrid = ({ categorie }) => {

    const [images, setImages] = useState([])

    const resImagenesApi = async () => {
        const data = await getGifs(categorie);
        // console.log(data);
        setImages(data)
    }

    useEffect(() => {
        resImagenesApi()
    }, [])


    return (<>
        <h3>{categorie} </h3>
        <div className="card-grid" >
            {images.map(datos => (
                <GifItem key={datos.id} {...datos} />
            ))
            }
        </div>
    </>

    )
}
