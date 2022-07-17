<script setup>
	defineProps({
		titlePrimary: String,
		titleSecondary: String,
		titleTeritary: String,
		subtitle: String
	})

	const { titlePrimary, titleSecondary, titleTeritary } = toRefs(props)
</script>
<template>
<section class="h-auto bg-white">
    <div class="px-4 py-24 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-7xl md:tracking-tight"> {{ titlePrimary }} <span class="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline"> {{ titleSecondary }}</span> {{ titleTeritary }}</h1>
            <p class="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">{{ subtitle }}</p>
        </div>
    </div>
</section>
</template>
