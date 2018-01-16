<template>
  <div class="ui-modal" @click="close" v-show="isOpen">

  </div>
</template>
<script>
  export default {
    name: 'ui-modal',
    data() {
      return {
        autoClose:false,
        isOpen:false
      }
    },
    watch:{
      isOpen:function (newValue) {
        if (newValue){
          this.$nextTick(()=>{
            this.callback('open')
          })
        }else{
          this.callback('close')
        }
      }
    },
    methods: {
      close(){
        if (this.autoClose){
          this.isOpen = false
        }
      }
    }
  }
</script>
<style scoped>
  .ui-modal{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.5;
    z-index: 100;
  }
</style>
