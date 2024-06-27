<template>
    <div>
        <form>
            <input type="text" v-model="search" />
        </form>
    </div>
</template>

<script script="setup">
import { ref } from "vue"
const search = ref("");
</script>

<style scoped></style>