<script setup lang="ts">
defineProps({
  width: String,
  height: String,
  fill: {
    type: String,
    default: '#000'
  },
  stroke: {
    type: String,
    default: '#000'
  }
})
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" :fill="fill" />
  </svg>
</template>
