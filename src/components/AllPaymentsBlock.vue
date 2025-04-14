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
        <img :src="payment.image" :alt="payment.name" class="mb-2 h-26 w-26 left-8 top-12 absolute">
    </div>
</template>
