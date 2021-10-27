import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

export default createStore({
  state: {
    userProfile: {},
    isAuthenticated: false
  },
  mutations: {
    setUserProfile(state, val, authState){
      state.isAuthenticated = !state.isAuthenticated
      state.userProfile = val
    }
  },
  actions: {
  },
  modules: {
  }
})
