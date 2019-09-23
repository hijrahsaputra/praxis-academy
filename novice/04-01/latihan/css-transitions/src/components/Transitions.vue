<template>
    <div id="example-1">
        <button @click="show = !show">
            Toggle render
        </button>
        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'Transitions'
}
</script>
<style scoped>
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>