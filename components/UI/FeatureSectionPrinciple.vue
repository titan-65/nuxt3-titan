<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: Array,
})
console.log(props)
// const items = image.forEach(item => {
//   return item
// })
//
// console.log(items)
</script>
<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424 464H416V400H424C437.25 400 448 389.25 448 376V24C448 10.75 437.25 0 424 0H80C35.891 0 0 35.875 0 80V432C0 476.125 35.891 512 80 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464ZM48 80C48 62.344 62.359 48 80 48H400V352H80C68.625 352 57.797 354.375 48 358.688V80ZM48 432C48 414.344 62.359 400 80 400H368V464H80C62.359 464 48 449.656 48 432Z"/></svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{{ title }}</h2>
            <p class="leading-relaxed text-base">{{ subtitle || 'subtitle' }}</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
