<template>
  <div class="mt-5">
    <div class="grid gap-4 md:grid-cols-2">
      <div v-for="(post, index) in posts" :key="index">
        <img :src="post.img" alt class="h-64 mx-auto object-cover w-full" />
        <div>{{post.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      posts: [
        {
          text: faker.lorem.text(),
          img:
            "https://images.unsplash.com/photo-1593319812172-2fe7f97cae40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          text: faker.lorem.text(),
          img:
            "https://images.unsplash.com/photo-1593375241731-cf2a6f0f1367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          text: faker.lorem.text(),
          img:
            "https://images.unsplash.com/photo-1593149198123-46380dbd87fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        },
        {
          text: faker.lorem.text(),
          img:
            "https://images.unsplash.com/photo-1592500595482-f8650326cf1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        }
      ]
    };
  }
};
</script>

<style>
</style>