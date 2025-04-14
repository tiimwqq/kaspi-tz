<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
  currentPath: string
}>()

const emit = defineEmits<{
  (e: 'selectTab', path: string): void
}>()

const tabs = [
  { label: 'Все', path: '/payments/all' },
  { label: 'Мои платежи', path: '/payments' },
  { label: 'История', path: '/payments/history' },
]

function handleClick(path: string) {
  emit('selectTab', path)
}
</script>

<template>
  <div class="pt-3 bg-white flex flex-col w-full">
    <!-- Заголовок -->
    <div class="py-3 flex items-center justify-center">
      <h1 class="text-lg text-gray-800 font-semibold">
        Платежи
      </h1>
    </div>

    <!-- Меню вкладок -->
    <nav class="mx-4 my-2 p-1 rounded-2xl bg-gray-100 flex gap-2 items-center justify-center">
      <button
        v-for="tab in tabs"
        :key="tab.path"
        class="text-sm font-medium px-3 py-2 rounded-xl w-full"
        :class="[
          props.currentPath === tab.path ? 'bg-white text-gray-900' : 'text-gray-900',
        ]"
        @click="handleClick(tab.path)"
      >
        {{ tab.label }}
      </button>
    </nav>
  </div>
</template>
