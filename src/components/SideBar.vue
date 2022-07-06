<template>
  <div id="sideBar">dddd</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "SideBar",
})
export default class SideBar extends Vue {}
</script>

<style lang="scss" scoped>
#sideBar {
  width: 30%;
  border: 1px solid red;
}
</style>
