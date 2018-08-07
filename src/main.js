// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import style from '../global/style.css'

Vue.config.productionTip = false

// import comP from '../package/index'
// Vue.use(comP)

// 引入自定义指令
// import {jitter} from '../global/instructions'

Vue.directive('jitter',{
  bind:function (el,x,xx,xxx) {
    let isOver = true
debugger
    let temp = xx.context[x.expression]
    el.onclick = function () {
      if (!isOver) return
      temp()
      isOver = false
      setTimeout(()=>{
        isOver = true
        console.warn('我好了，可以点了')
      },5000)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
