<template>
   <div class="flex flex-col gap-3">
      <div v-for="task in tasks" class="shadow rounded p-4">
         {{ task }}
      </div>
   </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useMath } from '@/composables/math';
const math = useMath();
const tasks = ref([
   'Найдите произведение корней уравнения \\(x^{2} - 8x + 11 = 6\\sqrt{x^{2} - 8x + 3}\\).',
   '5.  Найти сумму корней уравнения $\\sqrt{x - 2} = x - 2$.'
]);
</script>