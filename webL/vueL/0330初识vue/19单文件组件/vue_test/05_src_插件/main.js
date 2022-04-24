import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import plugins from './plugins'

Vue.use(plugins)

new Vue({
  render: h => h(App),
}).$mount('#app')
