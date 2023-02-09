import App from './App.vue'
import axios from 'axios'

const host = 'https://unidemo.dcloud.net.cn/';

axios.defaults.baseURL = 'http://127.0.0.1:2012'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$host = host;
Vue.prototype.axios = axios
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
