<template>
    <div class="ui-modal" @click="close" v-animation="animationShow"></div>
</template>
<script>
  export default {
    name: 'ui-modal',
    data() {
      return {
        autoClose: false,
        isOpen: false
      }
    },
    computed:{
      // 动画属性抛出
      animationShow:function () {
        return {
          com:'modal',
          status:this.isOpen
        }
      }
    },
    watch: {
      isOpen: function (newValue) {
        if (newValue) {
          this.$nextTick(() => {
            this.callback('open')
          })
        } else {
          this.callback('close')
        }
      }
    },
    methods: {
      close() {
        if (this.autoClose) {
          this.isOpen = false
        }
      }
    }
  }
</script>
<style scoped>
  .ui-modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    z-index: 100;
  }
</style>
