import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
const firebaseConfig = {
  apiKey: "AIzaSyBM9eIsWH-690AzrhP7KKxpym8dE0ZtTfo",
  authDomain: "ad-pro-14816.firebaseapp.com",
  projectId: "ad-pro-14816",
  storageBucket: "ad-pro-14816.appspot.com",
  messagingSenderId: "42083426722",
  appId: "1:42083426722:web:20324462598e42a1b992fb",
  measurementId: "G-JPB7L4Z34Y"
};
 // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  //const app = initializeApp(firebaseConfig);
  //getAnalytics(app);
  fb.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(`Смотрим что мы получили: ${user.uid}`)
      this.$store.dispatch('autoLoginUser', user.uid)
    }
 })
  this.$store.dispatch('fetchAds')
}
}).$mount('#app')