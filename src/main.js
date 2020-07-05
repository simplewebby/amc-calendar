import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextAutosize);

Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: "AIzaSyCaC_TwNoeFBBNyfvJkDzxlrKQTO-2mzfU",
  authDomain: "amc-calendar-tg.firebaseapp.com",
  databaseURL: "https://amc-calendar-tg.firebaseio.com",
  projectId: "amc-calendar-tg",
  storageBucket: "amc-calendar-tg.appspot.com",
  messagingSenderId: "211459371142",
  appId: "1:211459371142:web:79956b4e06c44d8c232107",
  measurementId: "G-122144TNJK"
});

export const db = firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
