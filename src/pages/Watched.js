import { useState, useEffect } from "react";
import Global from "../components/Global";
import env from 'react-dotenv';
import axios from 'axios';


const Watched = () => {
    
    const [ shows, setShows ] = useState([]);
    const [ movies, setMovies ] = useState([]);
    const [ showLen, setShowLen ] = useState();
    const [ movieLen, setMovieLen ] = useState();

    // display watched shows on History page
    const fetchShows = async () => {
        const userId = localStorage.getItem('userId')
        try {
            let response = await axios.get(`${env.BACKEND_URL}/listings/users/history/${userId}/series`);
            setShows(response.data.series);
            setShowLen(response.data.series.length)
            console.log(shows, showLen);
        } catch(error) {
            console.log(error.message);
        }
    }

    // display watched movies on History page
    const fetchMovies = async () => {
        const userId = localStorage.getItem('userId')
        try {
            let response = await axios.get(`${env.BACKEND_URL}/listings/users/history/${userId}/movies`);
            setMovies(response.data.movies);
            setMovieLen(response.data.movies.length)
            console.log(movies, movieLen);
        } catch(error) {
            console.log(error.message);
        }
    }
    
    // Change listing to 'watched === false'
    const notSeen = async(titleId) => {
        try {
            await axios.put(`${env.BACKEND_URL}/listings/users/${titleId}/notyet`);
            fetchShows();
            fetchMovies();
        } catch (error) {
            console.log(error)
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
            <p className="media-text">Look at all the shows and movies you've watched!! We're so proud! <br/> <br/>
            </p>
            <section className="watched-series">
                <h4 className="list-title">{showLen} series:</h4>
                { !shows ?
                <section />
                :
                shows.map((listing, i) => (
                    <>
                        <div
                            key={i}
                            className="single-history">
                                <h5>{listing.title}</h5>
                                <h5>{listing.year}</h5>
                                <button 
                                    className="not-watched"
                                    onClick={() => {notSeen(listing.id)}}>
                                nerp</button>
                        </div>
                    </>
                ))
                }
            </section>
            <br/><br/>
            <section className="watched-movies">
                <h4 className="list-title">{movieLen} movies:</h4>
                { !movies ?
                <section />
                :
                movies.map((listing, i) => (
                    <>
                        <div
                            key={i}
                            className="single-history">
                                <h5>{listing.title}</h5>
                                <h5>{listing.year}</h5>
                                <button 
                                    className="not-watched"
                                    onClick={() => {notSeen(listing.id)}}>
                                nerp</button>
                        </div>
                    </>
                ))
                }
            </section>
            <span className="aside">
                Do any of these still belong on the series or movies pages? Just click the 'nerp' button and you're set!
            </span>

        </div>
    )
}

export default Watched;