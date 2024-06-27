<template>
   <div v-html="props.expression">
   </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';
import { useMath } from '@/composables/math';
const math = useMath();
const props = defineProps({
   expression: String
})
</script>