<script setup lang="ts">
// plugin
import { Dropdown } from 'flowbite'
import type { DropdownInterface } from 'flowbite'

// types
import type { DropList } from '@/interface/components/dropDown'

/** props TS */
const props = defineProps({
  dropList: {
    type: Array as PropType<DropList[]>,
    default: []
  }
})

/** Drop 的 TS Intance  */
const targetRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()

let dropdown: DropdownInterface
onMounted(() => {
  targetRef.value?.focus()
  triggerRef.value?.focus()
  dropdown = new Dropdown(targetRef.value, triggerRef.value)
})

/** 取得當前選擇的值 */
const nowDropdownValue = ref<DropList>()

const selectedValue = (item: DropList) => {
  nowDropdownValue.value = item
  dropdown.hide()
}

/** 傳出去給外層用 */
defineExpose({
  nowDropdownValue
})
</script>

<template>
  <button
    ref="triggerRef"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    {{ nowDropdownValue?.name ? nowDropdownValue.name : '請選擇' }}
    <IconsArrowDown width="24" height="24" fill="#fff" />
  </button>

  <!-- Dropdown menu -->
  <div
    ref="targetRef"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      <li
        v-for="list in dropList"
        :key="list.id"
        @click="selectedValue(list)"
        class="cursor-pointer"
      >
        {{ list.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
