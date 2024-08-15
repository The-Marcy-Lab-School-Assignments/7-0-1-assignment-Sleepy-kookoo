function GifContainer({ gifs }) {
    return (
        <ul>
            {
                gifs?.map((gif) => (
                    <li key={gif.id}>
                        <img src={gif.images.preview_gif.url} alt="Gif" />
                    </li>
                ))
            }
        </ul>
    )
}

export default GifContainer
