import Vue from 'vue';
//使用Vue.directive()定义一个全局指令
//1.参数一：指令的名称，定义时指令前面不需要写v-
//2.参数二：是一个对象，该对象中有相关的操作函数
//3.在调用的时候必须写v-
const zyjdrag = Vue.directive('zyjdrag', //弹出框拖动指令
  {
    bind: function(el, binding) {
      let oDiv = el //当前元素
      oDiv.onmousedown = function(e) {
        let parent = e.target.parentNode.parentNode.parentNode;
        //鼠标按下，计算当前元素距离可视区的距离
        let disX = e.clientX - parent.offsetLeft
        let disY = e.clientY - parent.offsetTop
        document.onmousemove = function(e) {
          let L = e.clientX - disX
          let T = e.clientY - disY
          if (L < 0) {
            L = 0;
          } else if (L > document.body.clientWidth - parent.offsetWidth) {
            L = document.body.clientWidth - parent.offsetWidth;
          }

          if (T < 0) {
            T = 0;
          } else if (T > document.body.clientHeight - parent.offsetHeight) {
            T = document.body.clientHeight - parent.offsetHeight;
          }
          parent.style.left = L + 'px';
          parent.style.top = T + 'px';
          parent.style.zIndex='10';
        }
        document.onmouseup = function(e) {
          document.onmousemove = null
          document.onmouseup = null
          let dialogs=document.querySelectorAll("div[data-name='zyj-dialog']");
          dialogs.forEach((v,i)=>{
            dialogs[i].style.zIndex='3';
          })
          parent.style.zIndex='10';
        }
      }
    }
  }
)
export default zyjdrag;
