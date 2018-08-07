/*
*  指令为自定义动画
*   匹配规则：
* */
let opacity = {
  name: 'animation',
  bind: function (el, binding) {
    let bindingValue = binding.value
    let classArr = el.className.split(' ')
    let result = classArr.filter(item=>{
      return !/animation.*/.test(item)
    })
    if (bindingValue.status){
      result.push('animation-'+ bindingValue.com +'-enter')
    }else{
      result.push('animation-'+ bindingValue.com +'-leave')
    }
    el.className = result.join(' ')
  }
}

let jitter = {
  name: 'jitter',
  test:{
    componentUpdated: function (el, binding) {
      debugger
      console.warn(el)
    }
  }
}

export {
  opacity,
  jitter
}
