<script setup lang="ts">
interface HistoryItem {
  id: number
  date: string 
  payments: {
    id: number
    title: string
    phone?: string
    amount: number
    logoUrl?: string
  }[]
}

const historyData: HistoryItem[] = [
  {
    id: 1,
    date: '12 апреля',
    payments: [
      {
        id: 11,
        title: 'Beeline',
        phone: '+7 (705) 640-41-16',
        amount: 5000,
        logoUrl: 'https://some-cdn.com/logos/beeline.png',
      },
    ],
  },
  {
    id: 2,
    date: '11 апреля',
    payments: [
      {
        id: 21,
        title: 'Avtobys',
        amount: 100,
        logoUrl: 'https://some-cdn.com/logos/bus.png',
      },
      {
        id: 22,
        title: 'Avtobys',
        amount: 100,
        logoUrl: 'https://some-cdn.com/logos/bus.png',
      },
      {
        id: 23,
        title: 'Beeline',
        phone: '+7 (705) 640-41-16',
        amount: 5000,
        logoUrl: 'https://some-cdn.com/logos/beeline.png',
      },
    ],
  },
]
</script>

<template>
  <div class="space-y-6">
    <div
      v-for="item in historyData"
      :key="item.id"
      class="flex flex-col gap-2"
    >
      <!-- Дата -->
      <h2 class="text-sm text-gray-500 font-medium">
        {{ item.date }}
      </h2>

      <!-- Список транзакций за эту дату -->
      <ul class="space-y-2">
        <li
          v-for="payment in item.payments"
          :key="payment.id"
          class="p-3 border rounded flex items-center justify-between"
        >
          <div class="flex items-center space-x-3">
            <!-- Лого -->
            <div class="rounded-full bg-gray-100 flex h-8 w-8 items-center justify-center">
              <img
                v-if="payment.logoUrl"
                :src="payment.logoUrl"
                alt="logo"
                class="h-6 w-6 object-contain"
              >
            </div>
            <!-- Текст -->
            <div class="flex flex-col">
              <span class="text-sm font-medium">
                {{ payment.title }}
              </span>
              <span
                v-if="payment.phone"
                class="text-xs text-gray-500"
              >
                {{ payment.phone }}
              </span>
            </div>
          </div>
          <!-- Сумма -->
          <div class="text-sm font-semibold">
            {{ payment.amount }} ₸
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
