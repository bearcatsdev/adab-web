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
        @apply bg-primary text-white py-2 px-5 rounded-md shadow-md uppercase font-medium text-sm;
    }
    .button:hover {
        @apply bg-primaryDark;
    }
</style>