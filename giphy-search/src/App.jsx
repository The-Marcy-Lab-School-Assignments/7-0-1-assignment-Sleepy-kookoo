import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useEffect, useState } from 'react';
import API_KEY from '../config';

const GIF_API_KEY = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`

const defaultGif = {
  "message": "https://images.dog.ceo/breeds/hound-walker/n02089867_1764.jpg",
  "status": "success"
};


function App() {

  const [gifData, setGifData] = useState({ data: [] })
  const [wrong, setError] = useState()


  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(GIF_API_KEY);
      if (data) setGifData(data);
      if (error) setError(error);
    };
    doFetch()
  }, [])
  console.log(gifData.data)

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch img={gifData.data} set={setGifData} />
        <br />
        <GifContainer gifs={gifData.data} />
      </div>
    </div>
  );
}

export default App;
