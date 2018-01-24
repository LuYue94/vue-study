<template>
  <div>
    <div class="group">
      <img src="../../assets/vuex.png" alt="">
    </div>
    <div class="group">
      <p>State,Mutation,Getter</p>
      <figure>
        <figcaption>{{ count1 }}</figcaption>
        <p>
          <button @click="decrement">-</button>
          <button @click="increment">+</button>
        </p>
      </figure>
      <figure>
        <figcaption>{{ count2 }}</figcaption>
        <p>
          <button @click="reduce2">-</button>
          <button @click="add2">+</button>
        </p>
      </figure>
      <figure>
        <figcaption>{{ count3 }}</figcaption>
        <p>
          <button @click="reduce3(3)">-</button>
          <button @click="add3(3)">+</button>
          n = 3
        </p>
      </figure>
      <p>Getters - Sum :{{ sum }}</p>
    </div>
    <div class="group">
      <p>Actions</p>
      <button @click="action_test">click to dispatch action</button>
      <p>{{count5}}</p>
      <p>{{count6}}</p>
    </div>
    <div class="group">
      <p>Actions async/await 控制流程</p>
      <button @click="actionB">dispatch actionB => dispatch actionA</button>
      <p>{{get}}</p>
    </div>
    <div class="group">
      <p>Module</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'vuex',
    computed: {
      data() {},
      count1() {
        // return this.$store.getters.getCount
        // 或者
        return this.$store.state.count1;
      },
      ...mapState({
        count2: state => state.count2
      }),
      ...mapState(['count3', 'count5', 'count6', 'get']),
      ...mapGetters(['count4', 'sum'])
    },
    methods: {
      increment() {
        console.log(this.$store);
        this.$store.commit('ADD_COUNT_1');
      },
      decrement() {
        this.$store.commit('REDUCE_COUNT_1');
      },
      ...mapMutations(['add2', 'reduce2', 'add3', 'reduce3']),
      ...mapActions(['action_test', 'actionB'])
    }
  };
</script>

<style lang="scss" scope>

</style>


