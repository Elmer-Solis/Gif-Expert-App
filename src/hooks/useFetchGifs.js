import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categorie) => {


    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])


    const resImagenesApi = async () => {
        const data = await getGifs(categorie);
        // console.log(data);
        setImages(data)
        setIsLoading(false)
    }

    useEffect(() => {
        resImagenesApi()
    }, [])

    return {
        images,
        isLoading
    }
}
