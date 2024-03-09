<script lang="ts" setup>
import {definePageMeta} from "#imports";
 
definePageMeta({
  middleware: ['auth']
})
</script>
 
<template>
  <div>
    Page: Auth Only
  </div>
</template>
 
<style scoped></style>