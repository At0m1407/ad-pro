import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import BuyModalComponent from '@/components/Shared/BuyModal'

Vue.use(Router)
Vue.component('app-vue-modal',BuyModalComponent)                                        
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
const firebaseConfig = {
  apiKey: "AIzaSyBly3HE02GeKS6KghJEiHgz9SLsxdmtkFQ",
  authDomain: "ad-pro-f5283.firebaseapp.com",
  projectId: "ad-pro-f5283",
  storageBucket: "ad-pro-f5283.appspot.com",
  messagingSenderId: "144055465743",
  appId: "1:144055465743:web:bf18fc241533a08951307a",
  measurementId: "G-H44E6TK7VC"
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