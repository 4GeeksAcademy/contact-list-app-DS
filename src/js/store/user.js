export const userStore = {
    userList: [],
    user: {
        msg: "I'm an user object"
    }
}

export function userActions(getActions, getStore, setStore) {
    return {
        login: async () => {
            const store = getStore();

            setStore({
                ...store,
                user: {
                    msg: "Logged user"
                }
            });

            return store.user;
        }
    }
}