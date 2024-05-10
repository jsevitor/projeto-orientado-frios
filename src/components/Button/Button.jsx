import React from "react";
import { Link } from "react-router-dom";

import '../Button/button.sass';

export default ({ label, to }) => {

    if (to) {
        return (
            <Link to={to} className="btn">{label}</Link>
        );
    }

    return(
        <button className="btn">{label}</button>
    ); 
}