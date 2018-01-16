import Vue from 'vue';
import modalVue from './main.vue';

// 缓存用户存储的回调
let userFun = {}

// 监控组件内部变动，内容分发
const funChange = function (instruction) {
  if (userFun[instruction]) userFun[instruction]()
}

// 初始化参数
const initParam = {
  autoClose: true,
  isOpen:false,
  callback:funChange    // 所有内部组件抛出的数据
}

const ModalVueConstructor = Vue.extend(modalVue);

let instance = new ModalVueConstructor({
  el: document.createElement('div')
});

const Modal = function(options){
  let temp = {}
  Object.assign(temp,initParam)
  Object.assign(temp,options)

  // 将参数设置到组件之中
  for (let index in temp) {
    instance[index] = temp[index]
  }

  document.querySelector('body').appendChild(instance.$el)
}

Modal.Test = function (option) {
  return Modal(option)
}

Modal.show = function (callback) {
  if (callback){
    userFun['open'] = callback
  }else {
    userFun['open'] = null
  }

  let temp = {
    isOpen : true
  }
  return Modal(temp)
}

Modal.hide = function (callback) {
  if (callback){
    userFun['close'] = callback
  }else {
    userFun['close'] = null
  }

  let temp = {
    isOpen : false
  }
  return Modal(temp)
}

export default Modal;
export { Modal };
