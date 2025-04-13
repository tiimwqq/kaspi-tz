<script setup lang="ts">
import PaymentList from '~/components/PaymentList.vue'
import SearchBar from '~/components/SearchBar.vue'
</script>

<template>
  <div class="m-auto bg-gray-100 flex flex-col">
    <div class="rounded-b-xl bg-white">
      <SearchBar />
    </div>

    <PaymentList />
  </div>
</template>
