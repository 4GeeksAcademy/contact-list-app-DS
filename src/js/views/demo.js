import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import NewContact from "../component/NewContact.jsx";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<NewContact />
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
