import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueMq from 'vue-mq'



Vue.use(VueRouter);


Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})


// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// });


const router = new VueRouter({
  routes : Routes
});



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
