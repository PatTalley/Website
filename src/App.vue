<template>
  <div id="app">
    <Banner msg="Welcome to Your Vue.js App" />

    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";

export default {
  name: "App",

  components: {
    Banner: Banner,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2vh;
}
</style>
