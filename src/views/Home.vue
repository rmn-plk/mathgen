<template>
   <Math :expression="expression" />
</template>

<script setup>
import Math from '@/components/Math.vue';

import { ref } from 'vue';

const expression = ref(`
<div>
      <h1>MathJax Example in Vue</h1>

      <p>Inline Math: \( E = mc^2 \)</p>

      <p>Display Math:</p>
      <p>$ \sqrt{x^{2} - 4x - 12} = \sqrt{3x + 6}$ равна...</p>
      <p>Another Inline Math: \( ax^2 + bx + c = 0 \)</p>

      <p>Another Display Math:</p>
   </div>
`)

</script>