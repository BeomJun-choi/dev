import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Bar = { template: '<div>bar</div>' }

export default new VueRouter({
    mode: 'history',
    routes: [{ path: '/bar', component: Bar }]
})