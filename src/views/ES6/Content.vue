<template>
  <div>
    <div class="second_router">
      <router-link to="/home/es6/overview">总览</router-link>
      <router-link to="/home/es6/code">代码</router-link>
      <router-link to="/home/es6/promise">Promise</router-link>
      <router-link to="/home/es6/iterator">Iterator</router-link>
      <router-link to="/home/es6/generator">Generator</router-link>
      <router-link to="/home/es6/async">Async/Await</router-link>
      <router-link to="/home/es6/class">Class</router-link>
      <router-link to="/home/es6/module">Module</router-link>
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
.box {
    border-bottom: 1px dashed #42b983;
}
.title {
    font-size: 18px;
    span {
        color: #42b983;
        margin: 10px;
        font-size: 20px;
    }
}
.text {
    padding-left: 20px;
    span {
        font-weight: bold;
        padding-right: 20px;
    }
}
</style>
