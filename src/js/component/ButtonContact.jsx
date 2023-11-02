import React from 'react';
import { Link } from "react-router-dom";

const ButtonContact = () => {
    return (
        <div className="button-contact">
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary">Check the Context in action</button>
                </Link>
            </div>
        </div>
    )
}

export default ButtonContact;