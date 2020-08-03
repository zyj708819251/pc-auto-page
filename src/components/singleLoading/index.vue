<template>
  <div id="loading" >
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading' // 定义的组件名称 使用时写法：loading
};
</script>

<style scoped>
#loading {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
}
.loading {
  height: 80px;
  margin: auto;
}
.loading span {
  display: inline-block;
  width: 10px;
  height: 100%;
  border-radius: 4px;
  background: #06ffe4;
  -webkit-animation: load 1s ease infinite;
  animation: load 1s ease infinite;
  margin: 0 8px;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 60px;
    background: #06ffe4;
  }
  50% {
    height: 80px;
    margin: -5px 0;
    background: #4ab0ff;
  }
}
.loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
</style>
