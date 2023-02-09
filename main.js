import App from './App.vue'
import promise from 'es6-promise' 
import axios from 'axios'
// 引入路由
// import VueRouter from "vue-router";



const host = 'https://unidemo.dcloud.net.cn/';

axios.defaults.baseURL = 'http://127.0.0.1:2012'
axios.defaults.headers.common['token']=sessionStorage.getItem('token')?sessionStorage.getItem('token'):null
 
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$host = host;
Vue.prototype.axios = axios
// Vue.use(VueRouter)
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
