<script setup>
const { data } = await useAsyncData('one', () => GqlGuidingOne())
console.log(data)
const principle = ref(data)

const { createdAt, createdDate, gp2One, gp2OneEvidence, gp2Two, gp2TwoEvidence, gp2Three, gp2ThreeEvidence, gp2Four, gp2FourEvidence, gp2Five, gp2FiveEvidence} = principle.value.guidingPrinciple2

</script>
<template>
<div>

  <!-- Section 1 -->
  <section class="h-auto bg-white" style="background: url(https://res.cloudinary.com/ddszyeplg/image/upload/v1636919468/DSC_0988_zsfhgy.jpg); background-position: center center; background-size: cover; background-repeat: no-repeat">
    <div class="px-10 py-24 mx-auto max-w-7xl border-b-2">
      <div class="w-full mx-auto text-left md:text-center">
        <h1 class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">GP#1: The <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">Teacher Knows the Subject</span> for<br class="lg:block hidden"> they teaches. </h1>
        <p class="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24"></p>
      </div>
    </div>
  </section>
  <UIFeatureSectionPrinciple class="border-b-4" :title="gp2One" subtitle="subtitle" :image="gp2OneEvidence"/>
  <UIFeatureSectionPrincipleImage title="title" subtitle="subtitle" />

</div>
</template>
