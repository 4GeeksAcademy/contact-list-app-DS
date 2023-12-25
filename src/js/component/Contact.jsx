import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

import Swal from 'sweetalert2'

const Contact = ({ contact }) => {

    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [list, setList] = useState(store.ContactList);
    const [refresh, setRefresh] = useState(false);
    const [showForm, setShowForm] = useState(false)
    const [temp, setTemp] = useState({});
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        agenda_slug: "demian_sotomayor",
        address: "",
        phone: ""
    });

    const handleDeleteContact = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your contact has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <>
            <>
                {/* CONTACTO */}
                <div className="contact">
                    {/* PROFILE PICTURE */}
                    <img className="img-contact" src="https://storage.googleapis.com/replit/images/1511936948186_53605a1f8e2f117b874504a42b735a7f.png" alt="logo-4geeks" />
                    {/* CONTENEDOR INFORMACIÓN CONTACTO */}
                    <div className="info-contact">

                        {/* NOMBRE */}
                        <h4 className="name-contact">{contact.full_name}</h4>
                        {/* DIRECCIÓN */}
                        <h5 className="direction-contact">
                            <i className="icon-info fa-solid fa-location-dot"></i>
                            {contact.address}
                        </h5>
                        {/* NUMERO TELEFONO */}
                        <h5 className="number-contact">
                            <i className="icon-info fa-solid fa-phone-flip"></i>
                            {contact.phone}
                        </h5>
                        {/* EMAIL */}
                        <h5 className="email-contact">
                            <i className="icon-info fa-solid fa-envelope"></i>
                            {contact.email}
                        </h5>

                    </div>
                    {/* ICONOS EDITAR Y BORRAR */}
                    <div className="icons-contact">
                        <Link to={`/edit-contact/${contact.id}`} className='icon-contact'>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                        <i className="icon-contact trash fa-solid fa-trash" onClick={handleDeleteContact}></i>
                    </div>
                </div>
            </>
        </>
    )
}

export default Contact;