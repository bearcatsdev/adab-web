<template>
    <a :href="href" :target="target" class="button"><slot/></a>
</template>

<script>
    export default {
        name: "LinkButton",
        props: ['href', 'target']
    }
</script>

<style scoped>
    .button {
        @apply bg-primary;
        @apply text-white;
        @apply py-2;
        @apply px-5;
        @apply rounded-md;
        @apply shadow-md;
        @apply uppercase;
        @apply font-medium;
        @apply text-sm;
    }
    .button:hover {
        @apply bg-primaryDark;
    }
</style>