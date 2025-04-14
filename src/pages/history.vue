<script setup lang="ts">
import HistoryList from '~/components/HistoryList.vue'
import PaymentPeriod from '~/components/PaymentPeriod.vue'
import SearchBar from '~/components/SearchBar.vue'
</script>

<template>
  <div class="m-auto bg-gray-100 flex flex-col">
    <div class="rounded-b-xl bg-white">
      <SearchBar />
      <PaymentPeriod />
    </div>
    <HistoryList />
  </div>
</template>
