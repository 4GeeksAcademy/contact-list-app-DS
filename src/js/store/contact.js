export const contactStore = {
    contactList: [
        {
            fullName: "Demian Sotomayor",
            email: "demian.sotomayor.ur@gmail.com",
            agenda_slug: "my_super_agenda",
            address: "La Florida en algún lugar",
            phone: "9 7874 9131"
        }
    ]
}

export function contactActions(getActions, getStore, setStore) {
    return {
        loadFunction: async () => {
            let store = getStore();
            let actions = getActions();
            let { responseJSON, response } = await actions.useFetch("https://playground.4geeks.com/apis/fake/contact/agenda", null);
            setStore({ ...store, contactList: responseJSON })
        },

        addContact: async (obj) => {
            let store = getStore();
            let temp = store.contactList.slice();

            temp.push(obj);
            setStore({ ...store, contactList, temp });
            return store.contactList;
        },

        deleteContact: (id) => {
            let actions = getActions();
            actions.deleteFetch(id);
        },

        editContact: (i, name, email, phone, address) => {
            let store = getStore();
            let temp = store.contactList.slice();

            temp[i]["fullName"] = name;
            temp[i]["email"] = email;
            temp[i]["phone"] = phone;
            temp[i]["address"] = address;

            setStore({ ...store, contactList, temp });
        },

        getFetch: async (endpoint, body) => {
            let actions = getActions();
            let url = "https://playground.4geeks.com/apis/fake/contact/agenda" + endpoint;
            let response = await fetch(url, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });

            if (response.ok) {
                let responseJSON = await response.json();
                actions.loadFunction();
                return { responseJSON, response };
            }

            return null;
        }
    }
}

