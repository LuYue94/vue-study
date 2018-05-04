<template>
  <div>
    <div class="second_router">
      <router-link to="/home/es6/es60">overview</router-link>
      <router-link to="/home/es6/es60">const</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ES6_content"
  };
</script>

<style lang="scss">

</style>
