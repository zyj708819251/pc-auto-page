<template>
  <div class="zyj-dialog"
  data-name="zyj-dialog"
       v-bind:style="{width:initWidth+'px',height:initHeight+'px',top:top+'px',left:left+'px',zIndex:zIndex}"
       v-bind:id="'zyj-dialog-'+id">
    <component :is="content"></component>
  </div>
</template>
<script>
  export default {
    name: 'zyj-dialog',
    data () {
      return {
        initHeight: '400',//初始化高度
        initWidth: '400',//初始化宽度
        id: 'zyj-dialog',//层级
        top: 0,//位置;x
        left: 0,//位置：y
        content: null,//弹出框内容
        fullScreen: false,//是否全屏
        zIndex: 3,//显示层级
        options:{}
      }
    },
    mounted () {

    },
    methods: {
      closedialog (e) {
        if (this.options && typeof this.options.closeCallback == 'function') {
          this.options.closeCallback()
        }
        let pop = document.getElementById('zyj-dialog-'+this.id);
        if (pop) {
          document.querySelector('body').removeChild(pop)
        }
      },
    }
  }
</script>
<style lang="scss" scoped>


  /* 弹出框 */
  .zyj-dialog {
    display: inline-flex;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    &>div{
      width: 100%;
      height: 100%;
    }
  }

</style>
