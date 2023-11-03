import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
	return (
		<div className="contact-list">

			{/* CONTACTO 1 */}
			<div className="example-contact">
				{/* PROFILE PICTURE */}
				<img className="img-contact" src="https://storage.googleapis.com/replit/images/1511936948186_53605a1f8e2f117b874504a42b735a7f.png" alt="logo-4geeks" />
				{/* CONTENEDOR INFORMACIÓN CONTACTO */}
				<div className="info-contact">

					{/* NOMBRE */}
					<h4 className="name-contact">Mike Anamendolla</h4>
					{/* DIRECCIÓN */}
					<h5 className="direction-contact">
						<i class="icon-info fa-solid fa-location-dot"></i>
						5842 Hillcrest Rd
					</h5>
					{/* NUMERO TELEFONO */}
					<h5 className="number-contact">
						<i class="icon-info fa-solid fa-phone-flip"></i>
						(870) 288-4149
					</h5>
					{/* EMAIL */}
					<h5 className="email-contact">
						<i class="icon-info fa-solid fa-envelope"></i>
						mike.ana@example.com
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

			{/* CONTACTO 2 */}
			<div className="example-contact">
				{/* PROFILE PICTURE */}
				<img className="img-contact" src="https://storage.googleapis.com/replit/images/1511936948186_53605a1f8e2f117b874504a42b735a7f.png" alt="logo-4geeks" />
				{/* CONTENEDOR INFORMACIÓN CONTACTO */}
				<div className="info-contact">

					{/* NOMBRE */}
					<h4 className="name-contact">Mike Anamendolla</h4>
					{/* DIRECCIÓN */}
					<h5 className="direction-contact">
						<i class="icon-info fa-solid fa-location-dot"></i>
						5842 Hillcrest Rd
					</h5>
					{/* NUMERO TELEFONO */}
					<h5 className="number-contact">
						<i class="icon-info fa-solid fa-phone-flip"></i>
						(870) 288-4149
					</h5>
					{/* EMAIL */}
					<h5 className="email-contact">
						<i class="icon-info fa-solid fa-envelope"></i>
						mike.ana@example.com
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

			{/* CONTACTO 3 */}
			<div className="example-contact">
				{/* PROFILE PICTURE */}
				<img className="img-contact" src="https://storage.googleapis.com/replit/images/1511936948186_53605a1f8e2f117b874504a42b735a7f.png" alt="logo-4geeks" />
				{/* CONTENEDOR INFORMACIÓN CONTACTO */}
				<div className="info-contact">

					{/* NOMBRE */}
					<h4 className="name-contact">Mike Anamendolla</h4>
					{/* DIRECCIÓN */}
					<h5 className="direction-contact">
						<i class="icon-info fa-solid fa-location-dot"></i>
						5842 Hillcrest Rd
					</h5>
					{/* NUMERO TELEFONO */}
					<h5 className="number-contact">
						<i class="icon-info fa-solid fa-phone-flip"></i>
						(870) 288-4149
					</h5>
					{/* EMAIL */}
					<h5 className="email-contact">
						<i class="icon-info fa-solid fa-envelope"></i>
						mike.ana@example.com
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

		</div>
	)
}

export default ContactList