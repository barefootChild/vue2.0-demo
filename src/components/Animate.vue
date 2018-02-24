<template>
    <div class="components-animate-main">
        <transition
                    name="diy-transition"
                    enter-active-class="animated bounceInDown"
                    leave-active-class="animated bounceOutRight">
            <p v-if="show" class="animate-title-bounce">{{`${count}-${odd}`}}</p>
        </transition>
        <button @click="goToText">下一页</button>
    </div>
</template>
<style>
    .components-animate-main {
        position: absolute;
        display: flex;
        width: 100%;
        top: 54px;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 0;
        background:
                linear-gradient(90deg, #7E898F 0%, #636C75 100%),
                radial-gradient(at top, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.55) 100%),
                radial-gradient(at top, rgba(255, 255, 255, 0.50) 0%, rgba(0, 0, 0, 0.08) 63%);
        background-blend-mode: multiply, screen;

    }
    .animate-title-bounce {
        font-size: 24px;
        width: 50%;
        margin: 0 auto;
        color: #ffffff;
        text-align: center;
    }
</style>
<script>
import {mapState, mapGetters, mapActions} from 'vuex';
export default{
    data(){
        return{
            show: false
        }
    },

    created(){
        setTimeout(() => (this.show = true), 0);
    },

    computed: {
        ...mapState({count: state => state.a.count}),
        ...mapGetters(['odd'])
    },

    methods: {
        goToText(){
            this.$router.push({name: 'text'});
            this.decrement(1);
        },
        ...mapActions(['decrement'])
    }
}
</script>
