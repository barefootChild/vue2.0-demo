<template>
  <div class='container'>
    <div class='text'>{{msg}}</div>
    <button @click="goToAnimate">上一页</button>
  </div>
</template>
<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #178ce6
  }
  button {
    background: red;
    width: 50%;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
<script>
export default {
  data(){
    return {
      msg: 'Hello Vue-router!'
    }
  },
  methods: {
    goToAnimate(){
      this.$router.push({name: 'animate'});
    }
  }
}
</script>