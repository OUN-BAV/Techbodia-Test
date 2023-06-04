<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <a class="navbar-brand d-flex align-items-center justify-content-center" href="#">
      <img src="./assets/newLogo.png" width="50" height="50" alt="avatar" class="mx-2 rounded rounded-circle border">
      <h4 class="text-nav fw-bold mt-3">APPLICATION DESIGN</h4>
    </a>
  </nav>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.text-nav{
  color: #ff1584;
}
</style>
