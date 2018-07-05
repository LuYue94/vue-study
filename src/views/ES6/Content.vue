<template>
  <div>
    <div class="second_router">
      <router-link to="/home/es6/es6overview">总览</router-link>
      <router-link to="/home/es6/es6code">代码</router-link>
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
.second_router{
    border-bottom: 1px solid #409eff;
    a{
        line-height: 40px;
        font-size: 20px;
        padding: 7px;
    }
}
</style>
