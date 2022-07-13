<template>
  <aside id="sideBar">
    <ul class="menu-wrapper">
      <li v-for="(menu, index) in menus" :key="index">
        <router-link :to="menu.url ?? ''">{{ menu.title }}</router-link>
      </li>
      <button @click="count++">{{ count }}</button>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { Options, Vue } from "vue-class-component";
import { navItems, NavData } from "../_nav";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";

const menus: NavData[] = navItems;
const count: Ref<number> = ref(1);

onMounted(() => {
  console.log("this", this);
  console.log("this.count", count);
});
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
