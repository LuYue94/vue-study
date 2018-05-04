<template>
  <div>
    <div class="group">
      <h1>计算属性 Computed</h1>
      <p>original：{{ message }}</p>
      <p>computed: {{ reversedMessage }}</p>
    </div>
    <div class="group">
      <h1>get and set</h1>
      <p>firstName: {{firstName}}</p>
      <p>lastName: {{lastName}}</p>
      <p>fullName: {{fullName}}</p>
    </div>
    <div class="group">
      <h1>Component: Simple Counter</h1>
      <simple></simple>
      <simple start="9"></simple>
      <simple></simple>
    </div>
    <div class="group">
      <h1>Component: Counter</h1>
      <p>可设定初始值和limit，limit:7-11</p>
      <counter start="9" max="11" min="7"></counter>
    </div>
    <div class="group">
      <h1>Component: TodoList</h1>
      <todoList></todoList>
    </div>
    <div class="group">
      <h1>Component: CheckList</h1>
      <check-list></check-list>
    </div>
    <div class="group">
      <h1>Component: SelectBox</h1>
      <select-box></select-box>
    </div>
    <div class="group">
      <h1>Directive</h1>
      <directive-com></directive-com>
    </div>
    <div class="group">
      <h1>Filter</h1>
      'test' | capitalize : {{ 'test' | capitalize }}
      <br> message | filterA('arg1', arg2)
      <br> message | filterA | filterB
    </div>
  </div>
</template>

<script>
  import {
    Simple,
    Counter,
    TodoList,
    CheckList,
    SelectBox,
    DirectiveCom
  } from "../../components/test";

  export default {
    name: "Vue",

    data() {
      return {
        vueWrap: null,
        message: "Hello Word!",
        firstName: "Lu",
        lastName: "Yue"
      };
    },

    components: { Simple, Counter, TodoList, CheckList, SelectBox, DirectiveCom },

    computed: {
      reversedMessage: function() {
        return this.message
          .split("")
          .reverse()
          .join("");
      },
      fullName: {
        get: function() {
          return this.firstName + " " + this.lastName;
        },
        set: function(newValue) {
          console.log(newValue);
          this.lastName = newValue;
        }
      }
    },

    created() {
      console.log(this);
    },

    mounted() {
      this.vueWrap = document.getElementById("vue-wrap");
      // console.log(this.customFunction);
    },

    methods: {
      customFunction() {
        console.log("custom");
      }
    }
  };
</script>

<style lang="scss" scope>
  // #vue-wrap {
  //   box-sizing: border-box;
  //   width: 100%;
  //   height: 100%;
  //   padding: 20px;
  // }
</style>


