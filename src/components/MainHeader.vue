<template>
    <header class="flex px-5">
        <div class="flex flex-1 justify-between">
            <div>
                <RouterLink to="/">
                    <img src="" alt="Логотип" decoding="async" />
                </RouterLink>
            </div>
            <nav>
                <ul class="flex">
                    <li>
                        <RouterLink to="/upload">
                           Загрузить
                        </RouterLink>
                    </li>    
                    <li>
                        <RouterLink to="/tasks">
                           Задачи
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/generator">
                           Генератор
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
</script>

<style scoped>
header {
    height: 60px;
}
</style>