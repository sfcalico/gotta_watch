import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Global = () => {

    return (
        // returns the nav element that appears on the left of all pages when a user is signed in
        <nav className="global">
            <div className='globalLinks'>
                <section>Check out your shows and movies below!</section>
                    <br />
                <section className='globalLink'>
                    <Link to="/series">My Series</Link>
                </section>
                    <br />
                <section className='globalLink'>
                    <Link to="/movies">My Shows</Link>
                </section>
                <hr/>
                <section className='globalLink'>
                    <Link to="/history">My Watched List</Link>
                </section>
            </div>
        </nav>
    )
}

export default Global;