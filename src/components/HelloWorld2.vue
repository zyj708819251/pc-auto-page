<template>
  <div class="hello">
    <div class="zyj-dialog-header" v-zyjdrag>
      <div class="zyj-dialog-title">222222222222</div>
      <div class="zyj-dialog-close" @click="closePop">X</div>
    </div>
    <div class="pop-body">
      刷卡机等哈四季度开始的数据库哈师大还是
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    closePop(){
      this.$parent.closedialog();
    }
  },
  beforeDestroy() {
    alert(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{

    background: #000;
    overflow: auto;
  }
  .zyj-dialog-header{
    cursor: move;
    color: #FFF;
  }
</style>
