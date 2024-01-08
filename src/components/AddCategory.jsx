import { useState } from "react"

export const AddCategory = ({ category }) => {

    const [images, setImages] = useState('')

    const AddOnChange = ({ target }) => {
        setImages(target.value)
    }

    return (<>
        <input type="text"
            value={images}
            onChange={AddOnChange}
            placeholder="Ingresa un Name"
        />
    </>
    )
}
