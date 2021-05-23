import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    const logo =  "https://www.exactcure.com/wp-content/uploads/2020/03/logo-150png-e1584111359553.png";
    return (
        <Link to="/">
            <img src={logo} alt="Exact Cure"/>
        </Link>
    )
}
export default Logo