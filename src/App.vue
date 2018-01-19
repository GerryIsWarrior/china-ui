<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<show-test></show-test>-->
    <router-view/>
    <button @click="testData">测试数据</button>
  </div>
</template>

<script>

  import {Alert, Confirm} from '../package/index'

  export default {
    name: 'app',
    mounted() {
    },
    methods: {
      testData() {
        Confirm({
          titleInfo: '提示',
          contentInfo: 'wdawdawdaw',
          cancelText: 'asdasdasda',
          sureText: 'asdasdsa',
          call_sure:function () {
//            alert('sure')
          },
          call_cancel:function () {
//            alert('cancel')
          }
        })
      }
    }
  }
</script>

<style>
  body{
    overflow-x: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

  }
</style>
