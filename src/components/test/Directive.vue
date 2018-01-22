<template>
  <div>
    msg:
    <span>{{msg}}</span>
    <div v-demo:foo="msg"></div>
    <button @click="update">更新</button>
    <button @click="uninstall">卸载</button>
    <button @click="install">安装</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'test',
        foo: 12
      };
    },

    methods: {
      update: function() {
        this.msg = 'Hi';
      },
      uninstall: function() {
        this.msg = '';
      },
      install: function() {
        this.msg = 'Hello';
      }
    }
  };
</script>

<style lang="scss" scoped>
  span {
    color: red;
  }
</style>
