<script setup lang="ts">
import AllPaymentsBlock from './AllPaymentsBlock.vue'

interface Payment {
  id: number
  name: string
  image: string
}

const payments: Payment[] = [
  { id: 1, name: 'Мобильный', image: '/laptop-icon.png' },
  { id: 2, name: 'Коммуналка и телефон', image: '/small-home-icon.png' },
  { id: 3, name: 'Транспорт', image: '/school-bus-icon.png' },
  { id: 4, name: 'Интернет и ТВ', image: '/globes-icon.png' },
  { id: 5, name: 'Образование', image: '/graduation-cap-icon.png' },
  { id: 6, name: 'Штрафы и налоги', image: '/safe-icon.png' },
  { id: 7, name: 'Добрые дела', image: '/heartbeat-icon.png' },
  { id: 8, name: 'Финансовые услуги', image: '/piggy-bank-icon.png' },
  { id: 9, name: 'Красота и здоровье', image: '/dumbbell-icon.png' },
  { id: 10, name: 'Билеты', image: '/suitcase-icon.png' },
  { id: 11, name: 'Покупки и заказы', image: '/suitcases-icon-1.png' },
  { id: 12, name: 'Развлечения и отдых', image: '/guitar-icon.png' },
  { id: 13, name: 'Сайты обьявлений', image: '/blackboard-icon.png' },
  { id: 14, name: 'Игры', image: '/gamepad-icon.png' },
  { id: 15, name: 'Другое', image: '/remove-circle-background.png' },
]
</script>

<template>
  <div class="p-4 pt-0 bg-white">
    <div class="gap-4 grid grid-cols-3">
      <AllPaymentsBlock
        v-for="payment in payments"
        :key="payment.id"
        :payment="payment"
      />
    </div>
  </div>
</template>
