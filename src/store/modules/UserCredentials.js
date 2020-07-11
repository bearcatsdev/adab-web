import UserCredentialsApi from "../../services/api/UserCredentials"
import cookie from 'vue-cookies'

export default {
    namespaced: true,

    state: {
        sessionId: '',
        currentUser: {},
    },

    mutations: {
        SET_SESSION_ID(state, payload) {
            state.sessionId = payload
        },
        SET_CURRENT_USER(state, payload) {
            state.currentUser = payload
        }
    },

    actions: {
        AUTHENTICATE_USER({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                UserCredentialsApi.authenticate(payload.username, payload.password)
                    .then(response => {
                        commit('SET_SESSION_ID', response.data.values['session_id'])

                        // set cookie
                        cookie.set('session_id', state.sessionId, '7d')

                        resolve()
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        },
        GET_CURRENT_USER({commit}) {
            return new Promise((resolve, reject) => {
                UserCredentialsApi.getUserProfile()
                    .then(response => {
                        commit('SET_CURRENT_USER', response.data.values)
                        resolve()
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        }
    }
}