<template>
  <div>
    <p class='index'>I am init component!</p>
    <div class='input_container'>
      <span class='input_tip' :class="{'translate': hasValue}">请输入内容</span>
      <input type="text" class='animate' @focus="change" @blur="recover" v-model="message" />
    </div>
  </div>
</template>
<style lang='sass'>
.index{
  display: flex;
  width: 100%;
  height: 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: #178ce6;
}
.input_container{
  position: relative;
}
.input_tip{
  position: absolute;
  color: #90979c;
  top: 18px;
  z-index: -1;
}
.animate{
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #90979c;
  outline: none;
  margin-top: 20px;
  background: transparent;
  &:focus{
    border-bottom: 1px solid #178ce6;
  }
}
.translate{
  transform: translateY(-20px) scale(.8) translateX(-10px);
  transition: all .3s linear
}
</style>
<script>
export default {
  data(){
    return {
      hasValue: false,
      message: ''
    }
  },
  methods:{
    change(){
      this.hasValue = true;
    },
    recover(){
      this.hasValue = !(this.message === '');
    }
  }
}
</script>


