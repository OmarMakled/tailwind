<template>
  <div class="home">
    <chit-chat></chit-chat>
    <erin-lindford class="mt-4"></erin-lindford>
  </div>
</template>

<script>
import ChitChat from "@/components/ChitChat";
import ErinLindford from "@/components/ErinLindford";
export default {
  name: "home",
  components: { ChitChat, ErinLindford }
};
</script>
