<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="scss">
  @import './style/reset.scss';

  [v-cloak] {
    display: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
