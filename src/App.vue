<template>
  <div id="app">
    <div id="header">
      <div class="header-nav"><router-link v-for="(item, index) in navlist" :key="index" tag="div" exact :to="item.path" v-text="item.name"></router-link></div>
    </div>
    <button v-zyjtooltip @click="show">打开1111</button>

    <button @click="closeWindow">关闭1111</button>

    <p>
      <button @click="show2">打开2222</button>
      <button @click="closeWindow2">关闭2222</button>
    </p>

    <router-view />
  </div>
</template>
<script>
import hello from '@com/HelloWorld';
import hello22 from '@com/HelloWorld2';
export default {
  data() {
    return {
      navlist: [
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
  mounted() {},
  methods: {
    close() {
      console.log('我被关闭了');
    },
    show() {
      this.$zyjdialog.subPop({
        content: hello,
        id: 'hello',
        initWidth: 450,
        initHeight: 450,
        left: 200,
        top: 200,
        options: {
          closeCallback: this.close
        }
      });
    },
    show2() {
      this.$zyjdialog.subPop({
        content: hello22,
        id: 'hello22',
        initWidth: 450,
        initHeight: 450,
        left: 900,
        top: 200,
        options: {
          closeCallback: this.close
        }
      });
    },
    closeWindow() {
      this.$zyjdialog.closePop('hello');
    },
    closeWindow2() {
      this.$zyjdialog.closePop('hello22');
    }
  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  button {
    width: 100px;
    @include s-overflow;
  }
  #header {
    height: 122px;
    background: #2a7fef;
    position: relative;
    .header-nav {
      position: absolute;
      font-size: 24px;
      color: #e7e7e7;
      left: 50px;
      bottom: 0;
      @include flex;
      div {
        padding: 10px 35px;
        cursor: pointer;
      }
      .router-link-active {
        border-bottom: 6px solid #fff;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
