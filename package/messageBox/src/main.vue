<template>
  <div class="ui-alert">
    <div class="alert">
      <div class="title">{{ showInfo }}</div>
      <div class="content" :style="{}">
        <div>{{ showInfo }}</div>
        <slot name="customize"></slot>
      </div>
      <div class="option">
        <div class="cancel" v-if="isAlert">{{ cancelText }}</div>
        <div class="sure">{{ sureText }}</div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'showTest',
    version: '1.0.0',
    data () {
      return {
        showInfo: '',
        align: 'center',
        cancelText:'取消',
        sureText:'取消',
        isAlert:true
      }
    }
  }
</script>
<style scoped>
  .ui-alert{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .alert{
    width: 23.1rem;
    background-color: white;
    border-radius: 1.2rem;
  }

  .title{
    padding: 0.5rem;
    font-size: 1.8rem;
    display: flex;
    align-items:center;
    justify-content: center;
  }

  .content{
    padding: 0.5rem;
    min-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .option{
    padding: 0.5rem;
    border-top: 0.1rem solid #d8dce5;
    display: flex;
    justify-content: center;

  }

  .cancel{
    width: 50%;
    display: flex;
    justify-content: center;
    border-right: 0.1rem solid #d8dce5;
  }

  .sure{
    width: 50%;
    display: flex;
    justify-content: center;
  }
</style>
