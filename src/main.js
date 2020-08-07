import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false

//自适应
import '@utils/auto-rem'

//缩放
import '@utils/scale'

//QS
import qs from 'qs'
Vue.prototype.$qs = qs;

//工具类
import utils from '@utils/utils.js'
Vue.prototype.$utils = utils

//bus
import bus from '@utils/bus.js';
Vue.prototype.$bus =bus;

//tooltip
import zyjtooltip from '@utils/tooltip.js'

//Loading
import Loading from '@com/Loading/Loading'//注意路径是否正确
Vue.use(Loading)

//弹框
import dialogMessage from '@com/Dialog/Dialog.js';
Vue.prototype.$zyjdialog = dialogMessage.installDialog();

//拖动
import zyjdrag from '@utils/drag.js'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
