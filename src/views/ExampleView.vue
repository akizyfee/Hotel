<script setup lang="ts">
//types
import type { LoginData } from '@/interface/api/user'
import type { DropList } from '@/interface/components/dropDown'
import type { TabList } from '@/interface/components/tab'
import type { Form } from '@/interface/form/example'

//plugin
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

import { useWindowSize } from '@vueuse/core'

//components
import DropDown from '@/components/DropDown.vue'
import Modal from '@/components/Modal.vue'

//stores
import { useUserStore } from '@/stores/user'

//composables
import { useCatchError } from '@/composables/useCatchError'

// apis
import { login } from '@/api/user'

/** Settings 一些需要預先宣告的東西之類的 */
const { width } = useWindowSize() // 自動回傳當前螢幕寬度
const userStore = useUserStore() // userStore

/** swiper */
const modules = [Pagination, Autoplay]
const pagination = {
  clickable: true
}

/** Drop */
// example Drop
const dropRef = ref<InstanceType<typeof DropDown>>()

const dropList = ref<DropList[]>([
  {
    id: 1,
    name: '測試1'
  },
  {
    id: 2,
    name: '測試2'
  },
  {
    id: 3,
    name: '測試3'
  }
])

const nowDropdownValue = computed(() => dropRef.value?.nowDropdownValue)

watch(nowDropdownValue, () => {
  console.log('nowDropdownValue', nowDropdownValue.value)
})
/** Modal */
// example Modal
const modalRef = ref<InstanceType<typeof Modal>>()

const openModal = () => {
  modalRef.value?.openModal()
}

const clickFn = () => {
  console.log('嗨')
}

/** tabs */
// example Tab
const tabNowValue = ref<String>('profile')
const tabList = reactive<TabList[]>([
  { id: 'profile', name: '個人資料' },
  { id: 'records', name: '紀錄' },
  { id: 'recommend', name: '推薦' }
])

/** Form */
// example Form
const form = ref<Form>({
  name: '',
  email: '',
  date: ''
})

/** DatePick */
// example DatePick
const range = ref({
  start: new Date(2020, 0, 6),
  end: new Date(2020, 0, 10)
})

/** api */
// 登入
const loginData = ref<LoginData>({
  email: '',
  password: ''
})

const fetchLogin = useCatchError(async () => {
  const res = await login(loginData.value)
  console.log('登入回傳', res.result)
})

onMounted(() => {
  fetchLogin()
})
</script>

<template>
  <main>
    <section class="my-10">
      <div class="flex">
        <IconsLine width="30" />
        <IconsArrowRightLine width="30" />
        <IconsArrowLeftLine width="30" />
        <IconsArrowRight width="30" />
        <IconsArrowLeft width="30" />
        <IconsArrowDown width="30" />
        <IconsArrowUp width="30" />
        <IconsBed width="30" />
        <IconsCar width="30" />
        <IconsCheck width="30" />
        <IconsClose width="30" />
        <IconsLuxuryCar width="30" />
        <IconsMenu width="30" />
        <IconsMinus width="30" />
        <IconsPerson width="30" />
        <IconsPlus width="30" />
        <IconsProfile width="30" stroke="#000" />
        <IconsSize width="30" />
        <IconsTrain width="30" />
      </div>
    </section>
    <section class="my-10">
      <DropDown ref="dropRef" :dropList="dropList" />
      {{ nowDropdownValue }}
    </section>
    <section class="my-10">
      <button
        @click="openModal"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        開modal
      </button>
      <Modal ref="modalRef" @clickFn="clickFn">
        <div class="p-4 md:p-5 text-center">
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">嗨這裡是 slot</h3>
        </div>
      </Modal>
    </section>
    <section class="my-10">
      <Tab v-model="tabNowValue" :tabList="tabList"></Tab>
    </section>
    <section class="grid gap-6 mb-6 md:grid-cols-4 my-10">
      <Input v-model="form.name" labelName="姓名" labelID="name" placeholder="請輸入姓名" />
      <Input
        v-model="form.email"
        labelName="信箱"
        labelID="email"
        placeholder="請輸入信箱"
        type="email"
      />
      <Input v-model="form.date" labelName="時間" labelID="date" type="date" />
    </section>

    <section class="my-10">
      <VDatePicker v-model.range="range" mode="day" />
    </section>
    <!-- <Swiper
      class="home-banner h-screen"
      :pagination="pagination"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :modules="modules"
      :loop="true"
    >
      <SwiperSlide>
        <div class="bg-neutral-100/60 absolute top-0 left-0 w-full h-full px-5 lg:px-[4.166vw]">
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[4.926vh] lg:gap-0 h-full pt-[13.793vh]"
          >
            <div class="w-full lg:max-w-[33.125vw]">
              <div class="flex flex-col items-center lg:items-start" style="color: #be9c7c">
                <h1 class="text-7 lg:text-[2.083vw] font-bold">享樂酒店</h1>
                <p class="lg:text-[1.25vw] font-bold">Enjoyment Luxury Hotel</p>
                <span
                  class="block w-[2px] lg:w-full h-[10.221vh] lg:h-[2px] bg-gradient-to-b from-primary-100 mt-[4.926vh] lg:mt-8"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <img class="h-full w-full object-cover" :src="item" alt="Home Banner" />
      </SwiperSlide>
    </Swiper> -->
  </main>
</template>
<style scoped>
/** swiper 內的選擇器 */
.swiper-pagination-bullet {
  width: 32px;
  border-radius: 2px;
  height: 4px;
  background: #fff;
  opacity: 1;
  transition: 0.3s ease;
}

.swiper-pagination-bullet-active {
  width: 60px;
  background: #bf9d7d;
}

.swiper-button-next:after,
.swiper-button-prev:after,
.swiper-rtl .swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: '';
}
</style>
