import Vue from 'vue';
import AlertVue from './main.vue';
import { Modal } from '../../index'

// 缓存用户存储的回调
let userFun = {}

// 监控组件内部变动，内容分发
const funChange = function (instruction) {
  if (userFun[instruction]) userFun[instruction]()
}

// 初始化参数
const initParam = {
  isAlert:false,
  isConfim:false,

  autoClose: false,
  callback:funChange    // 所有内部组件抛出的数据
}

const AlertConstructor = Vue.extend(AlertVue);

let instance = new ModalVueConstructor({
  el: document.createElement('div')
});

const initInstance = () => {
  instance = new AlertConstructor({
    el:document.createElement('div')
  });

  instance['showInfo'] = '测试asdasdasd'
  // instance.showInfo = '我试谁'
  console.log(instance)
  document.querySelector('body').appendChild(instance.$el)
};

const MessageBox = function(options){
  let temp = {}
  Object.assign(temp,initParam)
  Object.assign(temp,options)

  // 将参数设置到组件之中
  for (let index in temp) {
    instance[index] = temp[index]
  }

  document.querySelector('body').appendChild(instance.$el)
}

MessageBox.alert = function (show) {
  Modal.show(function () {
    initInstance()
  })
}

export default MessageBox;
export { MessageBox };
