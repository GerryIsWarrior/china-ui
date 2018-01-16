import Alert from './messageBox/index'
import Modal from './modal/index'

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

export {
  Alert,
  Modal
}
