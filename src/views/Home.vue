<template>
  <div class="p-4">
    <chit-chat></chit-chat>
    <erin-lindford class="mt-4"></erin-lindford>
    <coffee-card class="mt-4"></coffee-card>
  </div>
</template>

<script>
import ChitChat from "@/components/ChitChat";
import CoffeeCard from "@/components/CoffeeCard";
import ErinLindford from "@/components/ErinLindford";

export default {
  name: "home",
  components: { ChitChat, ErinLindford, CoffeeCard }
};
</script>
