<template>
  <div>
    <input type="checkbox" ng-model="selectedALl" @click="selectAll" /> 全选
    <br>
    <label for="">1</label><input type="checkbox" value="1" v-model="checkList">
    <label for="">2</label><input type="checkbox" value="2" v-model="checkList">
    <label for="">3</label><input type="checkbox" value="3" v-model="checkList">
    <label for="">4</label><input type="checkbox" value="4" v-model="checkList">
    <br>
    <p>checked: {{ checkList }}</p>
  </div>
</template>

<script>
  export default {
    name: 'checkbox',

    props: {},

    data() {
      return {
        checkList: ['3'],
        selectedALl: false
      };
    },

    methods: {
      selectAll() {
        this.selectedALl = !this.selectedALl
        this.checkList = !this.selectedALl ? [] : [1, 2, 3, 4];
      }
    }
  };
</script>

<style lang="scss" scoped>
  label,
  input {
    float: left;
    width: 24px;
    margin-right: 10px;
  }
</style>
