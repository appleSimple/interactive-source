<template>
  <SideBar />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <main id="mainContent">
    <router-view />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SideBar from "@/components/SideBar.vue";

@Options({
  components: {
    SideBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#mainContent {
  margin-left: 400px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
