import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categorie) => {


    const [isLoading, setIsLoading] = useState(false)
    const [images, setImages] = useState([])


    const resImagenesApi = async () => {
        const data = await getGifs(categorie);
        // console.log(data);
        setImages(data)
        setIsLoading(true)
    }

    useEffect(() => {
        resImagenesApi()
    }, [])

    return {
        images,
        isLoading
    }
}
