<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<show-test></show-test>-->
    <router-view/>
    <button @click="testData">测试数据</button>
  </div>
</template>

<script>

  import {Alert} from '../package/index'

export default {
  name: 'app',
  mounted(){
    Alert({
      titleInfo: '提示123',
      contentInfo: '我试测试测试的，别打我',
      sureText: '走',
    })
  },
  methods:{
    testData(){
      Alert('我在你心里')
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
