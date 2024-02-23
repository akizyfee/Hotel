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
    <g clip-path="url(#clip0_14_2310)">
      <path
        d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z"
        :fill="fill"
      />
    </g>
    <defs>
      <clipPath id="clip0_14_2310">
        <rect width="24" height="24" :fill="fill" />
      </clipPath>
    </defs>
  </svg>
</template>
