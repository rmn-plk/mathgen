<template>
    <MainHeader />
    <main class="flex-1 flex-auto flex flex-col items-center">
        <div class="flex flex-col container">
            <h1 v-if="router.meta.title" class="font-bold text-4xl">{{ router.meta.title }}</h1>
            <slot />
        </div>
    </main>
    <MainFooter />
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
</script>

<style scoped></style>
