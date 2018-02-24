<template>
  <div class='main'>
    <p>主容器</p>
    <transition name='fade'>
      <router-view></router-view>
    </transition>
  </div>
</template>
<style>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
<script>
export default {
  
}
</script>


