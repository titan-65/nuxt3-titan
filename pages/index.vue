<script>
definePageMeta({
  layout: 'false',
})
</script>
<template>
  <div>
    <NuxtLayout name="custom">
      <section
        class="w-full h-screen bg-cover"
        style="
          background-image: url('https://res.cloudinary.com/ddszyeplg/image/upload/v1656478354/IMG_1412_orxemy.jpg');
          background-position: 50% 50%;
        "
      >
      <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-4xl font-medium title-font text-center text-white mb-20">
      <br class="hidden sm:block">Vantol Bennett
    </h1>
    </div>
       <div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Educator</h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                        <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                          <NuxtLink to="/educator">Click Here</NuxtLink>
                        </button>
                    </div>
                </div>

                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">Developer</h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                        <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                    </div>
                </div>


            </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
