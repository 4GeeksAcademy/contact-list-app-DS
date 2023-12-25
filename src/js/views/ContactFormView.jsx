import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, useParams } from 'react-router';

import Swal from 'sweetalert2'

import '../../styles/contact.css'

const ContactFormView = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        agenda_slug: "demian_sotomayor",
        address: "",
        phone: "",
    });

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveContact = () => {
        if (id) {
            actions.updateContact(id, formData);
        } else {
            actions.createContact(formData.full_name, formData.email, formData.phone, formData.address);
        }
        navigate('/');
    };

    return (
        <div className="new-contact">
            <h1 className="title-new-contact">{id ? 'Edit contact' : 'Add a new contact'}</h1>
            <div className="info-new-contact">
                {/* NOMBRE COMPLETO */}
                <h5>Full Name</h5>
                <input
                    className='input-new-contact'
                    type="text" name="full_name"
                    id="fullName"
                    placeholder='Full Name'
                    required
                    onChange={handleInputChange}
                />

                {/* EMAIL */}
                <h5>Email</h5>
                <input
                    className='input-new-contact'
                    type="email" name="email"
                    id="email"
                    placeholder='Enter email'
                    required
                    onChange={handleInputChange}
                />

                {/* TELÉFONO */}
                <h5>Phone</h5>
                <input
                    className='input-new-contact'
                    type="text" name="phone"
                    id="phone"
                    placeholder='Enter phone'
                    required
                    onChange={handleInputChange}
                />

                {/* DIRECCIÓN */}
                <h5>Address</h5>
                <input
                    className='input-new-contact'
                    type="text" name="address"
                    id="address"
                    placeholder='Enter address'
                    required
                    onChange={handleInputChange}
                />

            </div>
            <button
                className="btn-new-contact btn btn-primary w-100"
                type="button"
                onClick={handleSaveContact}
            >
                Save
            </button>
        </div>
    );
};

export default ContactFormView;
