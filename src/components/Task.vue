<template>
  <div >
    When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
    {{ expression }}

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
const props = defineProps({
  expression: String
});

</script>
