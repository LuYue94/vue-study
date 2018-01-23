<template>
  <div>
    <div>
      <img src="../../assets/vuex.png" alt="">
    </div>
    <figure>
      <figcaption>{{ count }}</figcaption>
      <p>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
      </p>
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'vuex',
    computed:{
      count(){
        return this.$store.state.count
      }
    },
    methods:{
      increment(){
        console.log(this.$store);
        this.$store.commit('INCREMENT')
      },
      decrement(){
        this.$store.commit('DECREMENT')
      }
    }
  };
</script>

<style lang="scss" scope>

</style>


