<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Card"
    }
</script>

<style scoped>
    .card {
        @apply py-2 px-4 shadow-md inline-block bg-white;
        border-radius: 8px;
    }
</style>