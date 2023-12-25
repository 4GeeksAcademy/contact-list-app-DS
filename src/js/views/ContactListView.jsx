import React, { useContext, useEffect } from 'react';
import Contact from '../component/Contact.jsx';
import { Context } from '../store/appContext';
import ButtonContact from '../component/ButtonContact.jsx';

import '../../styles/home.css'

const ContactListView = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, [actions]);

    return (
        <div className="row">
            <ButtonContact />
            <div className="contact-list">
                {store.contactList.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        </div>

    );
};

export default ContactListView;
