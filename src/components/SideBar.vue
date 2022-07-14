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
import {
  computed,
  onMounted,
  reactive,
  readonly,
  ref,
  UnwrapNestedRefs,
} from "vue";
import type { Ref } from "vue";

const menus: NavData[] = navItems;
const count: Ref<number> = ref(1);
const plusCount = computed({
  get: () => count.value + 1,
  set: (getVal) => {
    console.log(getVal);
    count.value = getVal - 5;
  },
});
const length = ref(50);
const reactiveObj: UnwrapNestedRefs<any> = reactive({ length });
const reactiveArr: UnwrapNestedRefs<any> = reactive([length, length]);
const mapArr: UnwrapNestedRefs<any> = reactive(
  new Map([
    ["count", ref(0)],
    ["hi", ref(3)],
  ])
);
const copyReactiveObj = readonly(reactiveObj);

onMounted(() => {
  length.value++;
  console.log("reactiveObj", reactiveObj.length);

  console.log("copyReactiveObj", copyReactiveObj.length);
  copyReactiveObj.length.value++;
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
