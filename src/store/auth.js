import axios from 'axios'
import { _routeApi } from "boot/axios"

const namespaced = true;

export default {

  namespaced,

  state: {
    token: null,
    isLogged: false
  },

  mutations: {

    resetState(state) {
      state.token = '';
      state.isLogged = false;
    },

    setToken (state, token) {
      state.token = token;
    },

    setLogginIn(state, val) {
      state.isLogged = val;
    },

  },

  actions: {

    login ({ commit }, { usuario, password }) {
      return _routeApi
        .post('api/login', {
          usuario,
          password
        });
    },

    logout ({ rootState }) {
      // return _routeApi.post('api/logout');
    }

  },

  getters: {
    getIsLogged(state){
        return !!state.isLogged;
    }
  },

}