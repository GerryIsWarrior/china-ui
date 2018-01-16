<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<show-test></show-test>-->
    <router-view/>
    <button @click="cccccc">close</button>
  </div>
</template>

<script>

  import {Alert,Modal} from '../package/index'

export default {
  name: 'app',
  mounted(){
    Alert.show()
  },
  methods:{
    cccccc(){
      Modal.hide()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
