import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Bar = {
    template: '<div>Bar component!</div>'
  };

export default new VueRouter({
    
    routes: [{ path: '/bar', component: Bar }]
})