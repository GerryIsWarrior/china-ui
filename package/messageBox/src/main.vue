<template>
  <div class="ui-alert" v-animation="animationShow">
    <div class="alert theme-color">
      <div class="title">{{ titleInfo }}</div>
      <div class="content" :style="{}">
        <div class="msg">{{ contentInfo }}</div>
        <slot name="customize"></slot>
      </div>
      <div class="option">
        <div class="cancel theme-font-color" :style="{'width':!isAlert?'50%':''}" v-if="!isAlert" @click="click_cancel">{{ cancelText
          }}
        </div>
        <div class="sure theme-font-color" :style="{'width':!isAlert?'50%':'100%'}" @click="click_sure">{{ sureText
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MessageBox',
    data() {
      return {
        visible: true,
        isAlert: false,
        titleInfo: '提示',
        contentInfo: '',
        cancelText: '',
        sureText: '',
      }
    },
    computed:{
      // 动画属性抛出
      animationShow:function () {
        return {
          com:'alert',
          status:this.visible
        }
      }
    },
    methods: {
      click_sure() {
        this.visible = false
        this.callback('sure')
      },
      click_cancel() {
        this.visible = false
        this.callback('cancel')
      }
    }
  }
</script>
<style scoped>
  .ui-alert {
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

  .alert {
    width: 61.8%;
    border-radius: 1.2rem;
  }

  .title {
    padding: 0.5rem;
    font-size: 1.8rem;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 3rem;
  }

  .content {
    font-size: 1.3rem;
    padding: 0 1.5rem;
    padding-bottom: 0.5rem;
    min-height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .option {
    padding: 0.5rem;
    border-top: 0.1rem solid #d8dce5;
    display: flex;
    justify-content: center;
    height: 3rem;
  }

  .cancel {
    display: flex;
    justify-content: center;
    border-right: 0.1rem solid #d8dce5;
    align-items: center;
  }

  .sure {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .msg {
    word-wrap: break-word;
    width: 100%;
    text-align: center;
  }


</style>
