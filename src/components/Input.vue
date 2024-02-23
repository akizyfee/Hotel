<script setup lang="ts">
/** props TS 的定義方式 */
const props = defineProps({
  labelName: {
    type: String,
    default: ''
  },
  labelID: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    // modelValue 是寫死的，要跟外面 v-model 的話名字只能叫做 modelValue
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <label :for="labelID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
      labelName
    }}</label>
    <input
      :value="modelValue"
      :type="type"
      :id="labelID"
      :placeholder="placeholder"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
</template>

<style scoped></style>
