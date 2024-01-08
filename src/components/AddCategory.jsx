import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const OnInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const OnSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return

        onAddCategory(inputValue.trim())
        setInputValue('')
    }

    return (<>
        <form onSubmit={OnSubmit} >
            <input type="text"
                value={inputValue}
                onChange={OnInputChange}
                placeholder="Ingresa un Name"
            />
        </form>
    </>
    )
}
