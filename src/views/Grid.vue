<template>
  <div class="mt-5">
    <div class="grid gap-4 md:grid-cols-2">
      <listing-card></listing-card>
      <property-card></property-card>
    </div>
  </div>
</template>

<script>
import ListingCard from "@/components/ListingCard";
import PropertyCard from "@/components/PropertyCard";

export default {
  components: { ListingCard, PropertyCard }
};
</script>

<style>
</style>