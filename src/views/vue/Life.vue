<template>
  <div>
    <p>{{count}}</p>
    <ul class="outputList">
      <li>
        <span>状态</span>
        <span>时间</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "life",

    data() {
      return {
        startTime: new Date().getTime(),
        count: 0,
        element_ul: null
      };
    },

    beforeCreate() {
      console.log("beforeCreate");
    },

    beforeMount() {
      console.log("beforeMount");
    },

    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
    },

    beforeUpdate() {
      console.log("beforeUpdate");
    },
    updated() {
      console.log("updated");
    },
    activated() {
      console.log("activated");
    },
    deactivated() {
      console.log("deactivated");
    },
    beforeDestroy() {
      console.log("beforeDestroy");
    },

    destoryed() {
      console.log("destoryed");
    },

    errorCaptured() {
      console.log("errorCaptured");
    },

    methods: {
      getTime() {
        return new Date().getTime() - this.startTime;
      }
    }
  };
</script>

<style lang="scss">
  .outputList li span:nth-child(1) {
    width: 100px;
    display: inline-block;
  }
</style>
