<template>
  <div>
    <div class="second_router">
      <router-link to="/home/vue/base">基本操作</router-link>
      <router-link to="/home/vue/life">生命周期</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "V"
  };
</script>

<style lang="scss">

</style>
