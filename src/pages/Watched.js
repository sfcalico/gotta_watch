import { useState, useEffect } from "react";
import Global from "../components/Global";
import axios from 'axios';


const Watched = () => {
    
    const [ shows, setShows ] = useState([]);
    const [ movies, setMovies ] = useState([]);

    // display watched shows on History page
    const fetchShows = async () => {
        const userId = localStorage.getItem('userId')
        try {
            let response = await axios.get(`http://localhost:5000/listings/users/history/${userId}/series`);
            console.log(response);
            setShows(response.data.listings);
            console.log(shows);
        } catch(error) {
            console.log(error.message);
        }
    }

    // display watched movies on History page
    const fetchMovies = async () => {
        const userId = localStorage.getItem('userId')
        try {
            let response = await axios.get(`http://localhost:5000/listings/users/history/${userId}/movies`);
            console.log(response);
            setMovies(response.data.listings);
            console.log(movies);
        } catch(error) {
            console.log(error.message);
        }
    }
    
    // display on page load
    useEffect(() => {
        fetchShows()
    }, [])

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div>
            <section>
                <Global />
            </section>
            <p>Look at all the shows and movies you've watched!! We're so proud! If you accidentally clicked 'watched' on your to-view pages, simply click the oops button and the title will be put back on the appropriate titles-to-view page</p>
            <section className="watched-series">
                { !shows ?
                <section />
                :
                shows.map((listing, i) => (
                    <div
                        key={i}
                        className="single-history">
                            <h5>{listing.title}</h5>
                            <h5>{listing.year}</h5>
                            <button className="not-watched">
                            remove</button>
                    </div>
                ))
                }
            </section>
            <section className="watched-movies">
            { !movies ?
                <section />
                :
                movies.map((listing, i) => (
                    <div
                        key={i}
                        className="single-history">
                            <h5>{listing.title}</h5>
                            <h5>{listing.year}</h5>
                            <button className="not-watched">
                            remove</button>
                    </div>
                ))
                }
            </section>

        </div>
    )
}

export default Watched;