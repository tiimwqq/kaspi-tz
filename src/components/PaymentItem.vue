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
  infoRight: {
    type: String,
    default: '',
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
      <!-- троеточие -->
      <button type="button" class="text-gray-400 p-2 hover:text-gray-600" @click.stop="handleOptionsClick">
        <svg
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-ellipsis-icon lucide-ellipsis"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </button>
    </div>
  </div>
</template>
