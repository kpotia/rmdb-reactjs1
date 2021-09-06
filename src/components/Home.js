import react from 'react';
// API
import API from '../API';
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// components 

// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    
    const {state, loading, error}  = useMovieFetch();

    console.log(state);
    return (
        <div>
            Home Page
        </div>
    )
}

export default Home;
