import Vue from 'vue'
import Dialog from '@com/Dialog/Dialog.vue'

export default {
  installDialog() {
    return {
      subPop: this.installSubPop.bind(this),
    }
  },

  /* 弹出框
   *  包含：子弹出窗
   *  参数：
   *  options={
   *      id：string，唯一标识
   *      initWidth: string（'400px'），初始化宽度（可缺）（此参数在手机浏览器上不生效，采用固定值：96%）
   *      initHeight: string，初始化高度（可缺）
   *      options：{
   *            minWidth: string，最小宽度，仅用于手机浏览器（可缺）
   *            minHeight: string，最小高度，仅用于手机浏览器（可缺）
   *            fullScreen：bool，是否显示全屏按钮（可缺）
   *            fullScreenCallback：func，点击全屏按钮的回调函数（可缺）
   *            closeCallback：func，点击窗口关闭事件的回调函数（可缺）
   *    }
   *  }
   */
  installSubPop(options) {
    this.initBase(options);
  },
  initBase(options) {
    var message = Vue.extend(Dialog)
    var component = new message({
      data: options
    }).$mount()
    let pop = document.getElementById('zyj-dialog-' + options.id);
    pop && document.querySelector('body').removeChild(pop);
    document.querySelector('body').appendChild(component.$el)
  }
}
