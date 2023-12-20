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
				const url = store.baseURL + "/agenda";
				const options = {
					method: "GET",
					headers: {
					}
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					setStore({ contactList: data })
					console.log(data)

				} else
					console.log("Error:", response.status, response.statusText)

			},

			getSingleContact: async (id) => {
				const store = getStore();
				const url = `${store.baseURL}/${id}`;
				console.log(url);
				const options = {
					method: "GET"
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();

					setStore({ selectedContact: data });

				} else
					console.log("Error:", response.status, response.statusText)

			},

			createContact: async (newContact) => {
				const store = getStore();
				const url = store.baseURL;
				const options = {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(newContact)
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					getActions().getContacts();   // to retrieve sth from the store we use "getStore()". In the same way, to trigger an action (we want to trigger getContacts), we use "getActions".
					//getActions().getContacts(); ensures that after creating a new contact and confirming its addition to the backend (response.ok), the local state in the application is updated to reflect this change in the frontend.
					//remember we need to do always 2 steps: update the backend and update the frontend
					//it will depend on the API, sometimes it will retrieve all contacts so I wouldn't need to trigger it, I would just use for example setStore({ "contactList": data}) 
					console.log(data);
				} else {
					console.log("Error:", response.status, response.statusText);
				}
			},
			deleteContact: async (id) => {
				const store = getStore();
				const url = `${store.baseURL}/${id}`;
				const options = {
					method: "DELETE",
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					getActions().getContacts();   //I need to get back my list of contacts which now won't include the one deleted
					console.log(data);
				} else {
					console.log("Error:", response.status, response.statusText);
				}
			},

			updateContact: async (contactId, updatedContact) => {
				const store = getStore();
				const url = `${store.baseURL}/${contactId}`;
				const options = {
					method: "PUT",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(updatedContact)
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					getActions().getContacts();   //I need to get back my list of contacts with now the updated contact
					console.log(data);
				} else {
					console.log("Error:", response.status, response.statusText);
				}
			}
		}
	};
};

export default getState;
