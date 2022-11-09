
import './App.css';
import Movie from '../Movie';
import{useState, useEffect} from 'react'

const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_dy23fapz/k_dy23fapz/k_dy23fapz/'


function App() {

  // const movies = [1,2,3]
  const [movie,setMovie] = useState([])

  useEffect(() => {
    fetch (movieApi)
    .then(res => res.json())
    .then(res => setMovie(res.results))
  },[])
return (
  <>
<header>
  <input type='text' placeholder='Search...'/>
</header>
<div className='movies'>
{movie.map((elem) => <Movie  key={elem.id} {...elem}/>)}

  </div>
  </>
)
}

export default App;
