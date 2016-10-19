<template>
    <div class="components">
        <button @click="show = !show">animate</button>
        <transition
                    name="diy-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight">
            <p v-if="show">I am appear</p>
        </transition>
    </div>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
</style>
<script>
    export default{
        data(){
            return{
                show: false
            }
        }
    }
</script>
