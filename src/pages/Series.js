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
        const userId = localStorage.getItem('userId');
        try {
            let response = await axios.put(`http://localhost:5000/lsitings/users/${titleId}/${userId}`, {
                headers: {Authorization: userId }
            })
            fetchShows();
        } catch (error) {
            console.log(error)
        }
    }

    // Remove listing from page
    const removeTitle = async(titleId) => {
        const userId = localStorage.getItem('userId');
        try {
            let response = await axios.delete(`http://localhost:5000/listings/remove/${titleId}/${userId}`, {
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

            <p>Here is your list of shows to watch</p>
            <section className="shows-to-watch">
                { !shows ?
                <section/>
                :
                shows.map((listing, i) => (
                    <div
                        key={i}
                        className="single-show">
                            <h4>{listing.title}</h4>
                            <h5>{listing.year}</h5>
                            <button
                                className="watched-button"
                                onClick={() => {haveSeen(listing.id)}}>
                            watched</button>
                            <button
                                className="remove-button"
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