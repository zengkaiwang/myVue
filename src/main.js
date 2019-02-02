import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'zyb-pc-ui';
import 'zyb-pc-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
