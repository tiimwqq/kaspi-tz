<script setup lang="ts">
import PaymentItem from './PaymentItem.vue'

interface PaymentListItem {
  logo: string
  title: string
  subtitle?: string
  infoRight?: string
}

const frequentItems: PaymentListItem[] = [
  {
    logo: 'https://yt3.googleusercontent.com/PtYvevYIRJPE1TanqQfNmgts1UM37OiI6twgxsjjYALrD9TiNVhxmMlW8Ad5qS5cMtpdiGF5zg=s900-c-k-c0x00ffffff-no-rj',
    title: 'Beeline',
    subtitle: '+7 (705) 640-41-17',
  },
  {
    logo: 'https://yt3.googleusercontent.com/PtYvevYIRJPE1TanqQfNmgts1UM37OiI6twgxsjjYALrD9TiNVhxmMlW8Ad5qS5cMtpdiGF5zg=s900-c-k-c0x00ffffff-no-rj',
    title: 'Beeline Интернет дома',
    subtitle: '0012037954',
  },
  {
    logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/5d/67/3d/5d673d8b-c9aa-182c-dca0-cbd4e73ecc7c/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg',
    title: 'ZEKET қайрымдылық қоры',
    subtitle: '',
    infoRight: '+7 (705) 645-00-00',
  },
  {
    logo: 'https://tengrinews.kz/userdata/u386/2021-06/resize/2066e80df6741510dd0a7d05e863f86d.jpeg',
    title: 'Фонд "Человек в маске"',
    subtitle: '',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUwyA7dFQlgQfoLtnZoMduMiD-c_JJp39ow&s',
    title: 'Activ',
    subtitle: '+7 (778) 748-92-95',
  },
  {
    logo: 'https://yt3.googleusercontent.com/PtYvevYIRJPE1TanqQfNmgts1UM37OiI6twgxsjjYALrD9TiNVhxmMlW8Ad5qS5cMtpdiGF5zg=s900-c-k-c0x00ffffff-no-rj',
    title: 'Beeline',
    subtitle: '+7 (705) 259-93-41',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxm3pWK0V0QmQ3XE5RJ2kPmlxwSOSDbOU5cQ&s',
    title: 'inDrive',
    subtitle: '3204523044',
  },
]
</script>

<template>
  <div class="flex-start mt-4 px-4 py-3 rounded-xl bg-white flex flex-col items-start">
    <h2 class="text-xl text-black font-bold mb-2">
      ЧАСТЫЕ
    </h2>
    <div class="flex flex-col gap-2 w-full">
      <PaymentItem
        v-for="(item, idx) in frequentItems" :key="idx" :logo="item.logo" :title="item.title"
        :subtitle="item.subtitle" :info-right="item.infoRight"
      />
    </div>
  </div>
</template>

<style scoped></style>
