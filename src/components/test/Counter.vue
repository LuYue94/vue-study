<template>
  <div>
    <button class="btn" @click="minus"> - </button>
    <input type="text" v-model="count">
    <button class="btn" @click="add"> + </button>
  </div>
</template>

<script>
  /**
             *
                type
                default
                validator

                String
                Number
                Boolean
                Function
                Object
                Array
                Symbol
                
             */
  export default {
    name: 'counter',

    props: {
      start: {
        type: String,
        required: true
      },
      max: String,
      min: String
    },

    data() {
      return {
        count: Number(0 + this.start)
      };
    },

    methods: {
      minus() {
        this.count > this.min ? this.count-- : null;
      },

      add() {
        this.count < this.max ? this.count++ : null;
      }
    }
  };

</script>

<style lang="scss" scoped>
  button,
  input {
    float: left;
    width: 24px;
    margin-right: 10px;
  }
</style>
