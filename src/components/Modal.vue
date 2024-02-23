<script setup lang="ts">
// plugin
import { Modal } from 'flowbite'
import type { ModalInterface } from 'flowbite'

// emit TS set
const emit = defineEmits<{
  (e: 'clickFn'): void
  (e: 'example', value: string): void
}>()

/** intance */
const modalRef = ref<HTMLElement>()

let modal: ModalInterface

onMounted(() => {
  modalRef.value?.focus()
  modal = new Modal(modalRef.value)
})

/** 開關 */
const openModal = () => {
  modal.show()
}

const closeModal = () => {
  modal.hide()
}

/** 方法 */
const clickFn = () => {
  emit('clickFn')
  modal.hide()
}

/** 傳出去的方法 */
defineExpose({
  openModal,
  closeModal
})
</script>

<template>
  <div
    ref="modalRef"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 p-10">
        <button
          @click="closeModal"
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IconsClose />
        </button>

        <!-- content start -->
        <slot></slot>
        <!-- content end -->
        <section class="flex justify-center">
          <button
            @click="clickFn"
            type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
            Yes, I'm sure
          </button>
          <button
            @click="closeModal"
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            No, cancel
          </button>
        </section>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
