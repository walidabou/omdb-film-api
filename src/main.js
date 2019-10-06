import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes';
import Axios from 'axios';

Vue.config.productionTip = false;

Vue.prototype.$axios = Axios;
Vue.prototype.$axios.defaults.baseURL = 'http://www.omdbapi.com';
Vue.prototype.$axios.defaults.headers.common['Accept'] = 'application/json';
Vue.prototype.$axios.defaults.headers.common['Content-Type'] = 'application/json';

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');
