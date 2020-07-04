<template>
  <div class="gap-4 grid grid-cols-1 mt-4 sm:grid-cols-2">
    <div class="mt-4 overflow-hidden rounded shadow-md">
      <div class="pb-2/3 relative">
        <img
          class="absolute h-full object-cover w-full"
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          alt
        />
      </div>
      <div class="p-4">{{text}}</div>
    </div>
    <div class="mt-4 overflow-hidden rounded shadow-md">
      <img
        class="h-56 object-cover w-full"
        src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        alt
      />

      <div class="p-4">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    text: function() {
      return faker.lorem.text();
    }
  }
};
</script>

<style>
</style>