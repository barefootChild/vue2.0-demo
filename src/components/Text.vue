<template>
  <div class='container'>
    <div class='text'>
      <p>{{`${count} - ${odd}`}}</p>
      <input class='model-input' type="text" v-model.number='change' />
    </div>
    <button @click="goToAnimate">上一页</button>
  </div>
</template>
<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 54px;
  }
  .text {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #178ce6;
    border-radius: 5px;
  }
  .model-input {
    border-radius: 3px;
    outline: none;
  }
  button {
    background: red;
    width: 50%;
    cursor: pointer;
    border-radius: 5px;
  }
</style>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  data(){
    return {
      msg: 'Hello Vue-router!'
    }
  },
  created(){
    console.log(this.$store);
  },
  computed: {
    ...mapState({count: state => state.a.count}),
    ...mapGetters(['odd']),
    change: {
      get() {
        return this.$store.state.a.change;
      },
      set(value) {
        this.update(value);
      }
    }
  },
  methods: {
    goToAnimate(){
      this.$router.push({name: 'animate'});
      this.increment(11);
    },
    ...mapMutations({add: 'ADD'}),
    ...mapActions(['increment', 'update'])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm);
    });
  }
}
</script>