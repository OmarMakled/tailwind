<template>
  <div class="p-4">
    <chit-chat></chit-chat>
    <erin-lindford class="mt-4"></erin-lindford>
    <listing-card class="mt-4"></listing-card>
  </div>
</template>

<script>
import ChitChat from "@/components/ChitChat";
import ErinLindford from "@/components/ErinLindford";
import ListingCard from "@/components/ListingCard";
export default {
  name: "home",
  components: { ChitChat, ErinLindford, ListingCard }
};
</script>
