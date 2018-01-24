<template>
  <div class="container">
    <aside>
      <router-link to="/home/ele">Element</router-link>
      <router-link to="/home/vue">Vue</router-link>
      <router-link to="/home/note">Note</router-link>
      <router-link to="/home/vuex">Vuex</router-link>
      <router-link to="/home/vrouter">vue-router</router-link>
    </aside>

    <section>
      <transition name="bounce">
        <router-view/>
      </transition>
    </section>
  </div>

</template>

<script>
  export default {
    name: 'home'
  };
</script>

<style lang="scss" scope>
  // router-link
  .aside {
    a:hover {
      background: #e8f8ff;
    }
  }
  .router-link-active {
    background: darken(#e8f8ff, 10%);
  }

  // transition
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  // slide
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  //bounce
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  $aside_width: 200px;
  aside {
    position: fixed;
    z-index: 999;
    background: #fff;
    left: 0;
    top: 0;
    width: $aside_width;
    height: 100%;
    border-right: 1px solid #409eff;
    text-align: center;
    & > a {
      width: 100%;
      display: block;
      line-height: 2;
      color: #409eff;
    }
  }
  section {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding-left: $aside_width;
    box-sizing: border-box;
    overflow-y: auto;
  }
  section > div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  h1 {
    color: #42b983;
  }
  .group {
    margin: 10px 0;
    padding: 10px;
    clear: both;
    border-bottom: 1px solid #42b983;
  }
  /* 清除浮动 */
  .group:after {
    content: '\20';
    display: block;
    height: 0;
    clear: both;
  }
  .group {
    *zoom: 1;
  }
</style>
