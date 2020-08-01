<template>
  <div id="app">
    <div id="header">
      <div class="header-nav">
        <router-link v-for="(item,index) in navlist" :key="index" tag="div" exact :to="item.path" v-text="item.name"></router-link>
      </div>
    </div>
      <button v-zyjtooltip>设计大咖很健康的哈数据库</button>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
        navlist:[
          {
            name: '个人桌面',
            path: '/'
          },
          {
            name: '运行监测',
            path: '/Monitor'
          },
          {
            name: '事件融合中心',
            path: '/Event'
          }
        ]
    };
  },
  mounted() {
  },
  methods: {

  }
};
</script>
<style lang="scss">
#app{
  width: 100%;
  height: 100%;
  button{
    width: 100px;
    @include s-overflow;
  }
  #header{
    height: 122px;
    background: url(assets/img/nav-bg.png) no-repeat;
    background-size: 100% auto;
    position: relative;
    .header-nav{
      position: absolute;
      font-size: 24px;
      color: #e7e7e7;
      left: 50px;
      bottom: 0;
      @include flex;
      div{
         padding: 10px 35px;
         cursor: pointer;
      }
      .router-link-active {
          border-bottom: 6px solid #FFF;
          color: #FFF;
          font-weight: bold;
      }
    }
  }
}
</style>
