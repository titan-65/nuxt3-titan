<script setup>
const { data } = await useAsyncData('one', () => GqlGuidingOne({ limit: 10}))
console.log(data)
</script>
<template>
  <div>
    <UITitleSection titlePrimary="GP#1: The" titleSecondary="Teacher" titleTeritary="Knows the Subject" subtitle="for they teaches." />
    <UIFeatureSectionPrinciple class="border-b-4" title="How many evidence" subtitle="subtitle" image="image"/>
    <UIFeatureSectionPrincipleImage title="title" subtitle="subtitle" />

  </div>
</template>
