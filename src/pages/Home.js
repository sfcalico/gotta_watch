import axios from 'axios';
import { useState } from 'react'
import Global from '../components/Global';

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
        axios.post(`http://localhost:5000/listing/save/${localStorage.getItem('userId')}`, {
            title:listing.Title,
            year:listing.Year,
            type:listing.Type
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <section>
                <Global />
            </section>
            <section>
                <p className="search-text">Below you can use IMDb's public API to search for shows and movies!</p>
            </section>
            <section>
                <form 
                    onSubmit={(e) => {fetchTitles(e)}}
                    className="IMDb-search">
                <input
                    type="text"
                    placeholder="search titles here"
                    onChange={(e) => {setEntry(e.target.value)}}
                    value={entry}
                />
                <button onClick={(e) => {setSearchTerm(entry)}}>search</button>
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
                                    className="addButton"
                                    onClick={(e) => {addToProfile(e, listing)}}>add</button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default HomePage;