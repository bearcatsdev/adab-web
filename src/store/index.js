import Vue from 'vue'
import Vuex from 'vuex'
import UserCredentials from "./modules/User"
import state from './global/state'
import getters from './global/getters'
import mutations from './global/mutations'
import actions from './global/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    UserCredentials
  }
})
