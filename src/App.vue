<template>
  <div id="app">
   <my-head></my-head>
   <my-nav></my-nav>
   <transition>
      <router-view></router-view>
   </transition>
   <my-foot></my-foot>
</template>

<script>
import myHead from './components/header'
import myNav from './components/nav'
import myFoot from './components/foot'

export default {
  name: 'app',
  components: {
    myHead,
    myNav,
    myFoot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
