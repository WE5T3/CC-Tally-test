import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

import 'ant-design-vue/dist/antd.css';


import moment from 'moment';
import 'moment/locale/zh-cn';
import {tagListModel} from "@/models/tagListModel";

moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn');

Vue.prototype.$moment = moment;//挂载到当前vue实例对象

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

window.tagList=tagListModel.fetch()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
