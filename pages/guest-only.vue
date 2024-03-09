<script lang="ts" setup>
import {definePageMeta} from "#imports";
 
definePageMeta({
  middleware: ['guest']
})
</script>
 
<template>
  <div>
    Page: Guest Only
  </div>
</template>
 
<style scoped></style>