import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

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

	return (
		<div className="contact-list">
			{store.ContactList && store.ContactList.length > 0 ? (
				store.contactList.map((item, index) => {
					return (
						<>
							{/* CONTACTO */}
							<div key={index} className="contact">
								{/* PROFILE PICTURE */}
								<img className="img-contact" src="https://storage.googleapis.com/replit/images/1511936948186_53605a1f8e2f117b874504a42b735a7f.png" alt="logo-4geeks" />
								{/* CONTENEDOR INFORMACIÓN CONTACTO */}
								<div className="info-contact">

									{/* NOMBRE */}
									<h4 className="name-contact">{item.fullName}</h4>
									{/* DIRECCIÓN */}
									<h5 className="direction-contact">
										<i class="icon-info fa-solid fa-location-dot"></i>
										{item.address}
									</h5>
									{/* NUMERO TELEFONO */}
									<h5 className="number-contact">
										<i class="icon-info fa-solid fa-phone-flip"></i>
										{item.phone}
									</h5>
									{/* EMAIL */}
									<h5 className="email-contact">
										<i class="icon-info fa-solid fa-envelope"></i>
										{item.email}
									</h5>

								</div>
								{/* ICONOS EDITAR Y BORRAR */}
								<div className="icons-contact">
									<Link to="/demo" className='icon-contact'>
										<i class="fa-solid fa-pen-to-square"></i>
									</Link>
									<i class="icon-contact trash fa-solid fa-trash"></i>
								</div>
							</div>
						</>
					)
				})
			) : (
				<div className="contact">
					<div className="info-contact">
						<h4 className="text-center p-5">No existen contactos</h4>
					</div>
				</div>
			)}

		</div>
	)
}

export default ContactList;