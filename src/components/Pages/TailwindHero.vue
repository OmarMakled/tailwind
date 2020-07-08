<template>
  <div class>
    <div class="flex justify-between lg:justify-start p-5">
      <img src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt class="w-8" />
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" class="block h-6 md:hidden w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div class="hidden md:block">
        <a href class="px-6 py-6 text-gray-800">Product</a>
        <a href class="px-6 py-6 text-gray-800">Features</a>
        <a href class="px-6 py-6 text-gray-800">Marketplace</a>
        <a href class="px-6 py-6 text-gray-800">Company</a>
        <a href class="px-4 py-4 text-indigo-600">Log in</a>
      </div>
    </div>
    <div>
      <div class="lg:text-left mt-5 px-5 sm:text-center">
        <h1 class="font-black leading-normal md:text-5xl sm:text-4xl text-3xl">
          Data to enrich your
          <span class="block text-indigo-500">online business</span>
        </h1>
        <p
          class="font-light lg:text-left md:text-center mt-5 text-xl xl:-m-1"
        >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        <div class="lg:justify-start mt-5 sm:flex sm:justify-center">
          <button
            class="bg-indigo-500 block px-10 py-3 rounded-md sm:mr-3 sm:w-auto text-white w-full"
          >Get Started</button>
          <button
            class="bg-indigo-100 block mt-5 px-10 py-3 rounded-md sm:m-0 sm:w-auto text-indigo-500 w-full"
          >Live Demo</button>
        </div>
        <svg
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:m-0 lg:right-0 lg:w-1/2 mt-8">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80"
          alt
          class="h-56 lg:h-full object-cover w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>