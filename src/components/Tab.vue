<script setup lang="ts">
// types
import type { TabList } from '@/interface/components/tab'

/** props TS */
const props = defineProps({
  modelValue: {
    // modelValue 是寫死的，要跟外面 v-model 的話名字只能叫做 modelValue
    type: String,
    default: ''
  },
  tabList: {
    type: Array as PropType<TabList[]>,
    default: []
  }
})
const emit = defineEmits(['update:modelValue'])

/** 當前選中的 value */
const selectedValue = (nowValue: string) => {
  emit('update:modelValue', nowValue)
}
</script>

<template>
  <div class="w-full">
    <div class="flex items-center gap-4 border-b border-gray-300 overflow-x-auto">
      <button
        @click="selectedValue(tab.id)"
        v-for="tab in tabList"
        :key="tab.id"
        :class="modelValue === tab.id ? 'text-red-500' : 'text-green-500'"
        class="w-32 relative px-6 py-2.5 bg-transparent rounded-b-none rounded-md font-bold group hover:text-primary duration-200 whitespace-nowrap"
      >
        {{ tab.name }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
