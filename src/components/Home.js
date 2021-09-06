import react from 'react';
// API
import API from '../API';
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

// components 
import HeroImage from './HeroImage';


// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    
    const {state, loading, error}  = useMovieFetch();

    console.log(state);
    return (
        <>
            {state.results[0] && 
            <HeroImage 
                image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title = {state.results[0].original_title}
                text = {state.results[0].overview}
            />
            }
        </>
      )
}

export default Home;
