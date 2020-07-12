import UserApi from "../../services/api/User"
import cookie from 'vue-cookies'

export default {
    namespaced: true,

    state: {
        sessionId: '',
        currentUser: {},
        userSessions: []
    },

    mutations: {
        SET_SESSION_ID(state, payload) {
            state.sessionId = payload
        },
        SET_CURRENT_USER(state, payload) {
            state.currentUser = payload
        },
        SET_USER_SESSIONS(state, payload) {
            state.userSessions = payload
        }
    },

    actions: {
        AUTHENTICATE_USER({commit, state}, payload) {
            return new Promise((resolve, reject) => {
                UserApi.authenticate(payload.username, payload.password)
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
                UserApi.getUserProfile()
                    .then(response => {
                        commit('SET_CURRENT_USER', response.data.values)
                        resolve()
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        },
        GET_SESSIONS({commit}) {
            return new Promise((resolve, reject) => {
                UserApi.getUserSessions()
                    .then(response => {
                        commit('SET_USER_SESSIONS', response.data.values)
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