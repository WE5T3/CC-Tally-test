import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";

import ElementUI from 'element-ui';
import '@/assets/style/element-variables.scss';

import {tagListModel} from "@/models/tagListModel";

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

window.tagList = tagListModel.fetch()
window.createTag = (name:string) => {
    const message = tagListModel.create(name)
    if (message === 'duplicated') {
        window.alert('标签名重复')
    } else if (message === 'success') {
        window.alert('标签添加成功')
    } else if (message === 'blank') {
        window.alert('标签名不能含有空格')
    }

}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
