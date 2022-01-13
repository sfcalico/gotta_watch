import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
            <span className="title nav">O-M-G</span>
            {
                !localStorage.getItem('userId') ?
            <>
                <Link to="/signup">
                    <span className="signup nav">Sign up</span>
                </Link>
                <Link to="/login">
                    <span className="login nav">Log in</span>
                </Link>
            </>
            :
            <>
                <Link to="/home">
                    <span className="home nav">Home</span>
                </Link>
                <span 
                    className="logout nav"
                    onClick={() => {
                        localStorage.removeItem('userId');
                        props.setUser({});
                    }}>log out</span>
            </>
            }
        </>
    )
}

export default Navbar;