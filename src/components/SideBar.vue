<template>
  <aside id="sideBar">
    <ul class="menu-wrapper">
      <li v-for="(menu, index) in menus" :key="index">
        <router-link :to="menu.url ?? ''">{{ menu.title }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { navItems, NavData } from "../_nav";

@Options({
  name: "SideBar",
})
export default class SideBar extends Vue {
  menus: NavData[] = navItems;

  data() {
    return {};
  }

  created() {
    console.log(navItems);
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
    li {
      cursor: pointer;
    }
  }
}
</style>
