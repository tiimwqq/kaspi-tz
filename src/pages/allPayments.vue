<script setup lang="ts">
import AllPaymentsGroup from '~/components/AllPaymentsGroup.vue'
import SearchBar from '~/components/SearchBar.vue'
</script>

<template>
  <div class="m-auto bg-gray-100 flex flex-col">
    <div class="rounded-b-xl bg-white">
      <SearchBar />
      <AllPaymentsGroup />
    </div>
  </div>
</template>
