import GlobalHome from '../components/GlobalHome';
import { useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';

const HomePage = (props) => {

    const [ entry, setEntry ] = useState('');
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ results, setResults ] = useState([]);

    // perform a search with the IMDb API
    const fetchTitles = async (e) => {
        e.preventDefault();
        let options = {
            method: 'GET',
            url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
            params: {s: `${searchTerm}`, r: 'json', page: '1'},
            headers: {
              'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
              'x-rapidapi-key': '503b7bbd65mshd446b8d90cd6cb6p1e8ee0jsne6957715a86f'
            }
          };
        let response = await axios.request(options).then((response) => {
            console.log(response.data.Search);
            setResults(response.data.Search);
            console.log(results)
        }).catch((error) => {
            console.log(error)
        })
    }

    // Add listing to profile
    const addToProfile = (e, listing) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        axios.post(`${env.REACT_APP_BACKEND_URL}/listings/save/${props.user.id}`, {
            title:listing.Title,
            year:listing.Year,
            type:listing.Type,
            poster:listing.Poster,
            user_id:props.user.id
        }).catch((error) => {
            console.log(error)
        })
        alert("Added to your Series/Movies page!")
    }

    return (
        <div>
            <section>
                <GlobalHome />
            </section>
            <section>
                <p className="search-text">Search for show and movie titles here!</p>
            </section>
            <section>
                <form 
                    onSubmit={(e) => {fetchTitles(e)}}>
                <input
                    className="IMDb-search"
                    type="text"
                    placeholder="type here"
                    onChange={(e) => {setEntry(e.target.value)}}
                    value={entry}
                />
                <button 
                    className="IMDb-search"
                    onClick={(e) => {setSearchTerm(entry)}}>search</button>
                </form>
                <div className="search-results">
                    { !results ? 
                    <section/>
                    :
                    results.map((listing, i) => (
                        <div
                            key={i}
                            className="single-title">
                                <h4>{listing.Title}</h4>
                                <h5>{listing.Year}</h5>
                                {listing.Poster === 'N/A' ? "" :
                                <img src={listing.Poster} alt={listing.Title}/> }
                                <button 
                                    className="add-button"
                                    onClick={(e) => {addToProfile(e, listing)}}>
                                add</button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default HomePage;