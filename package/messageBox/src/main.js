import Vue from 'vue';
import MessageBoxVue from './main.vue';
import {Modal} from '../../index'
import {is} from '../../../global/util'

// 引入自定义指令
import {opacity} from '../../../global/instructions'

Vue.directive(opacity.name, {
  update: opacity.bind
})

// 缓存用户存储的回调
var userFun = {}

// 监控组件内部变动，内容分发
const funChange = function (instruction) {
  // if (!userFun[instruction]) return
  switch (instruction) {
    case 'sure':
      Modal.hide()
      if (userFun[instruction]) userFun[instruction]()
      break
    case 'cancel':
      Modal.hide()
      if (userFun[instruction]) userFun[instruction]()
      break
  }

}

// 初始化参数
const initParam = {
  visible: true,
  isAlert: false,
  titleInfo: '提示',
  contentInfo: '',
  cancelText: '取消',
  sureText: '确认',
  autoClose: false,
  callback: funChange    // 所有内部组件抛出的数据
}

const MessageBoxConstructor = Vue.extend(MessageBoxVue);

let instance = new MessageBoxConstructor({
  el: document.createElement('div')
});

const MessageBox = function (options) {
  let temp = {}
  Object.assign(temp, initParam)
  Object.assign(temp, options)

  // 将参数设置到组件之中
  for (let index in temp) {
    instance[index] = temp[index]
  }

  document.querySelector('body').appendChild(instance.$el)
}

/*
*   方法说明
*   全量参数：title,message,callback
*     1. 1个参数，为消息体
*     2. 2个参数，分别是title和message
*     3. 3个参数，全量回调
* */
MessageBox.alert = function () {
  const param = arguments.length
  let temp = {}
  switch (param) {
    case 0 :
      console.warn(global.$ui.warn.noMessage)
      break
    case 1:
      if (is.String(arguments[0])) {
        temp['isAlert'] = true
        temp['contentInfo'] = arguments[0]
      } else {
        temp = arguments[0]
        temp['isAlert'] = true
      }
      break
    case 2:
      temp['isAlert'] = true
      temp['titleInfo'] = arguments[0]
      temp['contentInfo'] = arguments[1]
      break
    case 3:
      temp['isAlert'] = true
      temp['titleInfo'] = arguments[0]
      temp['contentInfo'] = arguments[1]
      userFun['sure'] = arguments[2]
      break
    default:
      break
  }
  Modal.show(function () {
    MessageBox(temp)
  })
}

/*
*   方法说明
* */
MessageBox.confirm = function (option) {
  let temp = {}
  userFun = {}
  temp['isAlert'] = false
  temp = option
  if (option.call_sure) userFun['sure'] = option.call_sure
  if (option.call_cancel) userFun['cancel'] = option.call_sure
  Modal.show(function () {
    MessageBox(temp)
  })
}

export default MessageBox;
export {MessageBox};
