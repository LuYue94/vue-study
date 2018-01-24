<template>
  <div>
    <button class="btn" @click="counter += 1">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: 'simple',

    props: ['start'],

    data() {
      return {
        counter: +(0 + this.start||0)
      };
    }
  };
</script>

<style lang="scss" scoped>
  .btn {
    float: left;
    // width: 20px;
    margin-right: 10px;
  }
</style>
