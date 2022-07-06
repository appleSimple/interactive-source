<template>
  <aside id="sideBar">
    <ul class="menu-wrapper">
      <li v-for="(menu, index) in menus" :key="index">
        {{ menu.name }}
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "SideBar",
})
export default class SideBar extends Vue {
  data() {
    return {
      menus: [
        {
          name: "first",
          route: "/first",
        },
        {
          name: "second",
          route: "/second",
        },
        {
          name: "third",
          route: "/third",
        },
      ],
    };
  }
}
</script>

<style lang="scss" scoped>
#sideBar {
  width: 400px;
  height: 100%;
  position: fixed;
  box-shadow: 1px 1px 8px #a0a0a0;

  .menu-wrapper {
  }
}
</style>
