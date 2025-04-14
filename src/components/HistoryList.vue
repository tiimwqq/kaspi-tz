<script setup lang="ts">
import HistoryItem from './HistoryItem.vue'

interface HistoryListItem {
  logo: string
  title: string
  subtitle?: string
  payment: number
}

const historyItems: HistoryListItem[] = [
  {
    logo: 'https://yt3.googleusercontent.com/PtYvevYIRJPE1TanqQfNmgts1UM37OiI6twgxsjjYALrD9TiNVhxmMlW8Ad5qS5cMtpdiGF5zg=s900-c-k-c0x00ffffff-no-rj',
    title: 'Beeline',
    subtitle: '+7 (705) 640-41-17',
    payment: 5000.00,
  },
  {
    logo: 'https://yt3.googleusercontent.com/PtYvevYIRJPE1TanqQfNmgts1UM37OiI6twgxsjjYALrD9TiNVhxmMlW8Ad5qS5cMtpdiGF5zg=s900-c-k-c0x00ffffff-no-rj',
    title: 'Beeline',
    subtitle: '+7 (705) 640-41-17',
    payment: 5000.00,
  },
  {
    logo: 'https://yt3.googleusercontent.com/PtYvevYIRJPE1TanqQfNmgts1UM37OiI6twgxsjjYALrD9TiNVhxmMlW8Ad5qS5cMtpdiGF5zg=s900-c-k-c0x00ffffff-no-rj',
    title: 'Beeline',
    subtitle: '+7 (705) 640-41-17',
    payment: 5000.00,
  },
  {
    logo: '../../public/Screenshot_9.png',
    title: 'Avtobys. Оплата проезда по QR',
    payment: 100.00,
  },
]
</script>

<template>
  <div class="flex-start mt-4 px-4 py-3 rounded-xl bg-white flex flex-col items-start">
    <h2 class="text-lg text-black font-bold mb-2">
      12 апреля
    </h2>
    <div class="flex flex-col gap-2 w-full">
      <HistoryItem
        v-for="(item, idx) in historyItems" :key="idx" :logo="item.logo" :title="item.title"
        :subtitle="item.subtitle" :payment="item.payment"
      />
    </div>
  </div>
</template>

<style scoped></style>
