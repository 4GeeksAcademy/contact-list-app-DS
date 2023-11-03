import { userStore, userActions } from "./user.js";
import { contactStore, contactActions } from "./contact.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			...userStore,
			...contactStore
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			...userActions(getActions, getStore, setStore),
			...contactActions(getActions, getStore, setStore),
			useFetch: async (endpoint, body, method = "GET") => {
				let url = "https://playground.4geeks.com/apis/fake/contact/agenda" + endpoint;
				let response = await fetch(url, {
					method: method,
					headers: { "Content-Type": "application/json" },
					body: body ? JSON.stringify(body) : null,
				});

				let responseJSON = await response.json();

				return { responseJSON, response };
			}
		}
	};
};

export default getState;
