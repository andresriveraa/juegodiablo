// import "firebase/auth";
// import "firebase/firestore";
import * as firebase from 'firebase/app';
import { firebaseConfig } from '@/api/firebase';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    initializeFirebase: () => {
      firebase.initializeApp(firebaseConfig);
    },
    //  => {
    //   // const Res = firebase.initializeApp(firebaseConfig);
    //   console.log(Res);
    // },
  },
};
