<script setup lang="ts">
interface Payment {
  id: number
  name: string
  image: string
}

defineProps<{ payment: Payment }>()
</script>

<template>
  <div class="p-2 rounded-lg bg-gray-100 aspect-square relative overflow-hidden">
    <span class="text-sm text-black font-medium leading-[1.2] block">
      {{ payment.name }}
    </span>
    <img :src="payment.image" :alt="payment.name" class="image-phone-sm mb-2 h-26 w-26 bottom-[-33px] right-[-2px] absolute">
  </div>
</template>
