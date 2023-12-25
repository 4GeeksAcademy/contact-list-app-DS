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

    useEffect(() => {
        if (id) {
            const contactToEdit = store.contactList.find(contact => contact.id === parseInt(id, 10));
            console.log("Contact to Edit:", contactToEdit);

            if (contactToEdit) {
                console.log("Setting Form Data:", {
                    full_name: contactToEdit.full_name,
                    email: contactToEdit.email,
                    address: contactToEdit.address,
                    phone: contactToEdit.phone,
                });

                setFormData({
                    full_name: contactToEdit.full_name,
                    email: contactToEdit.email,
                    address: contactToEdit.address,
                    phone: contactToEdit.phone,
                });
            }
        }
    }, [id, store.contactList]);

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveContact = () => {
        if (id) {
            actions.updateContact(formData.full_name, formData.email, formData.phone, formData.address, id);
        } else {
            actions.createContact(formData.full_name, formData.email, formData.phone, formData.address);
        }

        Swal.fire({
            icon: "success",
            title: "Hecho!",
        });

        setTimeout(() => {
            navigate('/');
        }, 2000);
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
                    value={formData.full_name}
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
                    value={formData.email}
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
                    value={formData.phone}
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
                    value={formData.address}
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
