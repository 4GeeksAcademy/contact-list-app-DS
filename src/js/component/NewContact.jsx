import React from 'react';
import { Link } from 'react-router-dom';

const NewContact = () => {
    return (
        <div className="new-contact">
            <h1 className='title-new-contact'>Add a new contact</h1>
            <div className="info-new-contact">
                {/* NOMBRE COMPLETO */}
                <h5>Full Name</h5>
                <input className='input-new-contact' type="text" name="fullName" id="fullName" placeholder='Full Name' />
                {/* EMAIL */}
                <h5>Email</h5>
                <input className='input-new-contact' type="email" name="email" id="email" placeholder='Enter email' />
                {/* TELÉFONO */}
                <h5>Phone</h5>
                <input className='input-new-contact' type="text" name="phone" id="phone" placeholder='Enter phone' />
                {/* DIRECCIÓN */}
                <h5>Address</h5>
                <input className='input-new-contact' type="text" name="address" id="address" placeholder='Enter address' />
            </div>
            <Link to="/">
                <button className="btn-new-contact btn btn-primary w-100">Save</button>
            </Link>
            <Link to="/" className='link-new-contact'>or get back to contacts</Link>
        </div>
    )
}

export default NewContact;