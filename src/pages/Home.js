import axios from 'axios';
import { useState } from 'react'
import Global from '../components/Global';

const HomePage = () => {

    const [ entry, setEntry ] = useState('');
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ results, setResults ] = useState([]);
    const [ display, setDisplay ] = useState(false);

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

    return (
        <div>
            <section>
                <Global />
            </section>
            <section>
                <p className="search-text">Below you can use IMDb's public API to search for shows and movies! Once search results are listed, you can save a listing to your profile </p>
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
                <button onClick={() => {setDisplay(true)}}>display results</button>
                </form>
                <div className="search-results">
                    { !display ? 
                    <section/>
                    :
                    results.map((listing, i) => (
                        <div
                            key={i}
                            className="single-title">
                                <h4>{listing.Title}</h4>
                                <h5>{listing.Year}</h5>
                                {listing.Poster === 'N/A' ? "" :
                                <img src={listing.Poster} /> }
                                <button className="addButton" >add</button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default HomePage;