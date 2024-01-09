import { useState } from "react"


export const GifButoon = ({ onClearCategory }) => {

    const [clean, setClean] = useState([])

    const clearDisplay = () => {
        setClean([])
        onClearCategory(clean)
    }

    return (
        <button onClick={clearDisplay} >
            Limpia pantalla
        </button>
    )
}
