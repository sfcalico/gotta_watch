import Global from "../components/Global";
import { useEffect, useState } from "react";
import axios from "axios";

const Series = (props) => {
    
    const [ shows, setShows ] = useState([]);

    // display listings on Series page
    const fetchShows = async () => {
        const userId = localStorage.getItem('userId')
        try {
            let response = await axios.get(`http://localhost:5000/listings/users/${userId}/series`);
            console.log(response);
            setShows(response.data.listings);
            console.log(shows);
        } catch(error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchShows()
    }, [])

    // Change listing to 'watched === true'
    const haveSeen = async(titleId) => {
        try {
            await axios.put(`http://localhost:5000/listings/users/${titleId}/seen`);
            fetchShows();
        } catch (error) {
            console.log(error)
        }
    }

    // Remove listing from page
    const removeTitle = async(titleId) => {
        const userId = localStorage.getItem('userId');
        try {
            await axios.delete(`http://localhost:5000/listings/remove/${titleId}/${userId}`, {
                headers: { Authorization: userId }
            });
            fetchShows();
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <section>
                <Global />
            </section>

            <p className="media-text">Here is your list of shows to watch...</p>
            <section className="shows-to-watch">
                { !shows ?
                <section/>
                :
                shows.map((listing, i) => (
                    <div
                        key={i}
                        className="single-show">
                            <h3>{listing.title}</h3>
                            <h5>{listing.year}</h5>
                            <button
                                className="listing-button"
                                onClick={() => {haveSeen(listing.id)}}>
                            watched</button>
                            <button
                                className="listing-button"
                                onClick={() => {removeTitle(listing.id)}}>
                            remove</button>  
                    </div>
                ))
                }
            </section>
        </div>
    )
}

export default Series;