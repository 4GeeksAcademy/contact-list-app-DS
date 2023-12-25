const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://playground.4geeks.com/apis/fake/contact",
			contactList: [],
			selectedContact: {},
		},
		actions: {
			getContacts: async () => {
				const store = getStore();

				const response = await fetch(store.baseURL + "/agenda/demian_sotomayor");

				if (response.ok) {
					const data = await response.json();
					if (JSON.stringify(data) !== JSON.stringify(store.contactList)) {
						setStore({ contactList: data });
					}
					console.log(data)

				} else {
					console.log("Error:", response.status, response.statusText)
				}
			},

			createContact: async (full_name, email, phone, address) => {
				const store = getStore();
				const url = store.baseURL + "/";

				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "demian_sotomayor",
						address: address,
						phone: phone
					})
				};

				console.log("Full Name:", full_name);
				console.log("Email:", email);
				console.log("Address:", address);
				console.log("Phone:", phone);

				const response = await fetch(url, options);
				console.log(response);

				if (response.ok) {
					const data = await response.json();
					getActions().getContacts();
					console.log(data);
				} else {
					console.log("Error:", response.status, response.statusText);
				}
			},

			deleteContact: async (contactId) => {
				const store = getStore();
				const url = store.baseURL + `/${contactId}`;

				const options = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				};

				const response = await fetch(url, options);
				console.log(response);

				if (response.ok) {
					const data = await response.json();
					setStore({ contactList: store.contactList.filter((contact) => contact.id !== contactId) });
					console.log(data);
				} else {
					console.log("Error deleteContact:", response.status, response.statusText);
				}
			},

			updateContact: async (full_name, email, phone, address, contactId) => {
				const store = getStore();
				const url = store.baseURL + `/${contactId}`;

				const options = {
					method: "PUT",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						"full_name": full_name,
						"email": email,
						"agenda_slug": "demian_sotomayor",
						"address": address,
						"phone": phone
					})
				};

				const response = await fetch(url, options);
				console.log(response);

				if (response.ok) {
					const data = await response.json();
					console.log(data);
				} else {
					console.log("Error updateContact:", response.status, response.statusText);
				}
			}
		}
	};
};

export default getState;
