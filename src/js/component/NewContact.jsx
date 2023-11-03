import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const NewContact = () => {

    const { store, actions } = useContext(Context);
    const [data, setData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    })

    useEffect(() => { }, [data.fullName, data.email, data.phone, data.address])

    return (
        <div className="new-contact">
            <h1 className='title-new-contact'>Add a new contact</h1>
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
                onClick={async () => {
                    let { responseJSON, response } = await actions.useFetch("https://playground.4geeks.com/apis/fake/contact/agenda", data, "POST")
                    if (!response.ok) {
                        alert("Hubo un error");
                        return
                    }
                    alert("Guardado");
                }}>Save</button>

            <Link to="/" className='link-new-contact'>or get back to contacts</Link>
        </div>
    )
}

export default NewContact;