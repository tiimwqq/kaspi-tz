<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import PaymentsHeader from '~/components/PaymentsHeader.vue'

const router = useRouter()
const route = useRoute()

function navigate(path: string) {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>

<template>
  <div class="m-auto bg-gray-100 flex flex-col max-w-[450px] min-h-screen">
    <PaymentsHeader :current-path="route.path" @select-tab="navigate" />

    <main class="">
      <router-view />
    </main>
  </div>
</template>
