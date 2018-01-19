import MessageBox from './messageBox/index'
import Modal from './modal/index'

// 引入全局错误信息，并且将错误信息注入全局
import globalInfo from '../global/errorInfo'

global.$ui = globalInfo

const components = [
  // testT,
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}

const Alert = MessageBox.alert
const Confirm = MessageBox.confirm

export {
  Alert,
  Confirm,
  Modal
}
