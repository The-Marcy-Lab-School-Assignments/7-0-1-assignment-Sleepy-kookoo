import { useState } from "react"
import { handleFetch } from "../utils"
import API_KEY from "../../config"

function GifSearch({ img, set }) {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputValue}&limit=3&rating=g`);
        set(data[0])
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" className="form-control" id="searchInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
