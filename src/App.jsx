import NavBar from './components/NavBar';
import Cards from "./components/Cards";
import './css/style.css'
import { useState, useEffect } from 'react';


function App() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDk2OTJmM2ZjODYyNmQyYjYyM2FiYTBjODg2YWRiNSIsInN1YiI6IjYzZWU0ZWVlNjk5ZmI3MDA4Y2Q2ZmRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf7hO4YrqvLyrDQagavzkfzkJa3iJUWc5J3Q35RS_2w'
    }
  };

  const [populars, setPopulars] = useState([]);
  const [nowPlayings, setNowPlayings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [dataPopular, dataNowPlaying] = await Promise.all([
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options),
          fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        ]);

        const popularResult = await dataPopular.json();
        const popular = popularResult.results;
        setPopulars(popular.slice(0, 10));

        const nowPlayingResult = await dataNowPlaying.json();
        const nowPlaying = nowPlayingResult.results;
        setNowPlayings(nowPlaying.slice(0, 10));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={loading ? 'loading' : 'bg-popular'} id='Popular'>
        <NavBar></NavBar>
        {loading ? <h1 className='text-light text-center mb-3'>Loading</h1> : <Cards items={populars} title='Popular'></Cards>}
      </div>
      <div className='bg-nowPlaying' id='NowPlaying'>
        {loading ? <h1 className='text-light text-center mb-3'>Loading</h1> : <Cards items={nowPlayings} title='Now Playing'></Cards>}
      </div>
    </>


  )
}

export default App
