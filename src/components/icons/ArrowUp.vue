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
    <g clip-path="url(#clip0_249_5440)">
      <path d="M16.59 16L12 11.42L7.41 16L6 14.59L12 8.59L18 14.59L16.59 16Z" :fill="fill" />
    </g>
    <defs>
      <clipPath id="clip0_249_5440">
        <rect width="24" height="24" :fill="fill" />
      </clipPath>
    </defs>
  </svg>
</template>
