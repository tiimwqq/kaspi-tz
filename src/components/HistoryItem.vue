<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  logo: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  payment: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="py-3 rounded-lg bg-white flex w-full cursor-pointer items-center">
    <div class="flex gap-3 w-full items-center justify-between">
      <div class="flex gap-3">
        <!-- иконка -->
        <img v-if="logo" :src="logo" class="rounded-full h-10 w-10">
        <div v-else class="rounded-full bg-gray-200 h-8 w-8" />
        <!-- текст -->
        <div class="flex flex-col items-start">
          <span class="text-base text-gray-900 font-medium">{{ title }}</span>
          <span v-if="subtitle" class="text-sm text-gray-500">{{ subtitle }}</span>
        </div>
      </div>
      <div class="text-md text-gray-800">
        {{ payment }},00 ₸
      </div>
    </div>
  </div>
</template>
