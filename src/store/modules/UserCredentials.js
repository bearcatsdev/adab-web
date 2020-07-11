import UserCredentialsApi from "../../services/api/UserCredentials";

export default {
    namespaced: true,

    state: {
        currentUser: {}
    },

    mutations: {
        SET_CURRENT_USER (state, payload) {
            state.currentUser = payload
        }
    },

    actions: {
        GET_CURRENT_USER ({commit}, payload) {
            return new Promise((resolve, reject) => {
                UserCredentialsApi.authenticate(payload.username, payload.password)
                    .then(response => {
                        if (response.status === 200) {
                            commit('SET_CURRENT_USER', response.data.values)
                            resolve()
                        } else {
                            console.log(response)
                            reject(response.status)
                        }
                    })
                    .catch(error => {
                        commit('SET_CURRENT_USER', error)
                        console.log(error)
                        reject(error)
                    })
            })
        }
    }
}