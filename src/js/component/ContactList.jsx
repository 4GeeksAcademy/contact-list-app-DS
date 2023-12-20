import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

import Swal from 'sweetalert2'

const ContactList = () => {

	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [list, setList] = useState(store.ContactList);
	const [refresh, setRefresh] = useState(false);
	const [showForm, setShowForm] = useState(false)
	const [temp, setTemp] = useState({});
	const [data, setData] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: ""
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
		<div className="contact-list">
			<>
				{/* CONTACTO */}
				<div className="contact">
					{/* PROFILE PICTURE */}
					<img className="img-contact" src="https://storage.googleapis.com/replit/images/1511936948186_53605a1f8e2f117b874504a42b735a7f.png" alt="logo-4geeks" />
					{/* CONTENEDOR INFORMACIÓN CONTACTO */}
					<div className="info-contact">

						{/* NOMBRE */}
						<h4 className="name-contact">Full Name</h4>
						{/* DIRECCIÓN */}
						<h5 className="direction-contact">
							<i className="icon-info fa-solid fa-location-dot"></i>
							Address
						</h5>
						{/* NUMERO TELEFONO */}
						<h5 className="number-contact">
							<i className="icon-info fa-solid fa-phone-flip"></i>
							Phone
						</h5>
						{/* EMAIL */}
						<h5 className="email-contact">
							<i className="icon-info fa-solid fa-envelope"></i>
							Email
						</h5>

					</div>
					{/* ICONOS EDITAR Y BORRAR */}
					<div className="icons-contact">
						<Link to="/edit-contact" className='icon-contact'>
							<i className="fa-solid fa-pen-to-square"></i>
						</Link>
						<i className="icon-contact trash fa-solid fa-trash" onClick={handleDeleteContact}></i>
					</div>
				</div>
			</>

			{/* <div className="contact">
					<div className="info-contact">
						<h4 className="text-center p-5">No existen contactos</h4>
					</div>
				</div> */}


		</div>
	)
}

export default ContactList;