import React from 'react';
import { Link } from "react-router-dom";

const ButtonContact = () => {
    return (
        <div className="container-button-contact row">
            <Link to="/demo">
                <button className="btn-contact">Add new contact</button>
            </Link>
        </div>
    )
}

export default ButtonContact;