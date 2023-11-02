import React from "react";
import "../../styles/home.css";
import ContactList from "../component/ContactList.jsx";
import ButtonContact from "../component/ButtonContact.jsx";

export const Home = () => (
	<>
		<ButtonContact />
		<ContactList />
	</>
);
