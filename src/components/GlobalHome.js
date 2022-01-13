import { Link } from 'react-router-dom';
// import { useState } from 'react';

const GlobalHome = () => {

    return (
        // returns the nav element that appears on the left of all pages when a user is signed in
        <nav className="global">
            <div className='global-links'>
                <br/>
                <section className="title-card">Welcome to Oh My Gottawatch! </section>
                <br/>
                <section>Check out your shows and movies below!</section>
                    <br />
                <section className="global-link">
                    <Link to="/home">Search Media</Link>
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