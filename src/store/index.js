import Vue from 'vue';
import Vuex from 'vuex';

// modules
import authfirebase from './modules/authfirebase';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authfirebase,
  },
});
