var is = {}
var types = ['Array', 'Boolean', 'Date', 'Number', 'Object', 'RegExp', 'String', 'Window', 'HTMLDocument', 'function', 'FormData']

function generateIs () {
  types.forEach(item => {
    is[item] = function (paramSource) {
      let temp = false
      if (typeof paramSource === 'function') {
        temp = true
      } else {
        temp = Object.prototype.toString.call(paramSource) === '[object ' + item + ']'
      }
      return temp
    }
  })
}
generateIs()

export default {}
export {
  is
}
