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
        @apply py-2;
        @apply px-4;
        @apply shadow-md;
        @apply inline-block;
        @apply bg-white;
        border-radius: 8px;
    }
</style>