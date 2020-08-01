import Vue from 'vue';
/**
 * css溢出隐藏的元素显示全称
 * 使用方式 
 * 元素添加 v-zyjtooltip 指令
 */
const zyjtooltip = Vue.directive('zyjtooltip', //弹出框拖动指令
  {
    bind: function(el, binding) {
      let x = 10;
      let y = 20;
      let oDiv = el; //当前元素
      let oBody = document.body || document.getElementsByTagName("body")[0];

      let newtitle = '';
      oDiv.onmouseover = function(e) {
        newtitle = e.currentTarget.innerHTML;
        var clientWidth = e.currentTarget.clientWidth;
        var scrollWidth = e.currentTarget.scrollWidth;
        if (clientWidth < scrollWidth) {
          var div = document.createElement("div");
          div.innerText = newtitle;
          div.setAttribute('id', 'zyj-tooltip');
          div.style.cssText = "left: " + (e.pageX + x) + "px;top:" + (e.pageY + y - 80) + "px;";
          oBody.appendChild(div);
        }
      }
      oDiv.onmouseout = function(e) {
        let tooltip = document.getElementById('zyj-tooltip');
        oBody.removeChild(tooltip);
      }
      oDiv.onmousemove = function(e) {
        let tooltip = document.getElementById('zyj-tooltip');
        tooltip.style.cssText = "left: " + (e.pageX + x + 10) + "px;top:" + (e.pageY + y - 60) + "px;";
      }

    }
  }
)
export default zyjtooltip;
