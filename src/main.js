import Vue from 'vue';
// import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';

// import { firebaseConfig } from './api/firebase/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    init() {
      // eslint-disable-next-line
      console.log('Hola 🌝');
    },
  },
  created() {
    // firebase.initializeApp(firebaseConfig);
    store.dispatch('authfirebase/initializeFirebase');
    this.init();
  },
  render: (h) => h(App),
}).$mount('#app');
