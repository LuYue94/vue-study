<template>
  <div>
    <select v-model="selected" v-on:change="change">
      <option v-for="item in list" :value="item.value" :key="item.id">{{item.text}}</option>
    </select>
    <p>Selected:{{selected}}</p>
  </div>
</template>

<script>
  export default {
    name: 'checkbox',

    props: {},

    data() {
      return {
        list: [
          { value: '1', id: '1', text: 'aaa' },
          { value: '2', id: '2', text: 'bbb' },
          { value: '3', id: '3', text: 'ccc' },
          { value: '4', id: '4', text: 'ddd' }
        ],
        selected: 3
      };
    },

    methods: {
      change(e) {
        console.log(e);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
