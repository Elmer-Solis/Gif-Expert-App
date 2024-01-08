
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ categorie }) => {


    const { images, isLoading } = useFetchGifs(categorie)




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
