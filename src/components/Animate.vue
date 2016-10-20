<template>
    <div class="components-animate-main">
        <transition
                    name="diy-transition"
                    enter-active-class="animated bounceInDown"
                    leave-active-class="animated bounceOutRight">
            <p v-if="show" class="animate-title-bounce">I am appear</p>
        </transition>
    </div>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
    .components-animate-main {
        box-sizing: border-box;
        height: 40px;
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
    export default{
        data(){
            return{
                show: false
            }
        },

        created(){
            setTimeout(() => (this.show = true), 0);
        }
    }
</script>
