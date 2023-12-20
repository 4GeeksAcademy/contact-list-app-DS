import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

import Swal from 'sweetalert2'

import '../../styles/contact.css'

const EditContact = () => {

    const { store, actions } = useContext(Context);
    const [data, setData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    })

    const apiContactURL = "https://playground.4geeks.com/apis/fake/contact/agenda";

    const handleSaveContact = () => {
        Swal.fire({
            icon: "success",
            title: "Changes saved!",
        });

        // Redirect to home

    }

    useEffect(() => { }, [data.fullName, data.email, data.phone, data.address])

    return (
        <div className="new-contact">
            <h1 className='title-new-contact'>Edit contact</h1>
            <div className="info-new-contact">
                {/* NOMBRE COMPLETO */}
                <h5>Full Name</h5>
                <input
                    className='input-new-contact'
                    type="text" name="fullName"
                    id="fullName"
                    placeholder='Full Name'
                    required
                    onChange={(e) => setData({ ...data, fullName: e.target.value })}
                />

                {/* EMAIL */}
                <h5>Email</h5>
                <input
                    className='input-new-contact'
                    type="email" name="email"
                    id="email"
                    placeholder='Enter email'
                    required
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                {/* TELÉFONO */}
                <h5>Phone</h5>
                <input
                    className='input-new-contact'
                    type="text" name="phone"
                    id="phone"
                    placeholder='Enter phone'
                    required
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                />

                {/* DIRECCIÓN */}
                <h5>Address</h5>
                <input
                    className='input-new-contact'
                    type="text" name="address"
                    id="address"
                    placeholder='Enter address'
                    required
                    onChange={(e) => setData({ ...data, address: e.target.value })}
                />

            </div>

            <button
                className="btn-new-contact btn btn-primary w-100"
                type='button'
                onClick={handleSaveContact}>Save changes</button>

            <Link to="/" className='link-new-contact'>or get back to contacts</Link>
        </div>
    )
}

export default EditContact;