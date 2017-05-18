// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// middle ware? with route-guard
/*
router.beforeEach(function (to, from, next) {
  if (to.path === '/param') {
    if (localStorage.getItem('user') === null) {
      var user = prompt('name?')
      var pass = prompt('pass?')
      if (user === 'moo' && pass === 'moo') {
        localStorage.setItem('user', user)
        next()
      } else {
        alert('Wrong')
        return
      }
    }
  }
  next()
}
)
*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
