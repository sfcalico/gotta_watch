import { Link } from 'react-router-dom';
// import { useState } from 'react';

const GlobalHome = () => {

    return (
        // returns the nav element that appears on the left of all pages when a user is signed in
        <nav className="global">
            <div className='global-links'>
                <br/>
                <section className="title-card">Oh My Gottawatch! </section>
                <br/>
                <section>Find and keep track of shows and movies you wanna watch!</section>
                    <br />
                <section className="global-link">
                    <Link to="/home">Media Search</Link>
                </section>
                    <br />
                <section className='global-link'>
                    <Link to="/series">My Series</Link>
                </section>
                    <br />
                <section className='global-link'>
                    <Link to="/movies">My Movies</Link>
                </section>
                <br />
                <section className='global-link'>
                    <Link to="/history">My Watched List</Link>
                </section>
                <br />
            </div>
        </nav>
    )
}

export default GlobalHome;