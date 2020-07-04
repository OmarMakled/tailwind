<template>
  <div id="app" class="p-8">
    <app-nav></app-nav>
    <router-view />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav";
export default {
  components: {
    AppNav
  }
};
</script>

<style src="./assets/tailwind.css"></style>
