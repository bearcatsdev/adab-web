<template>
    <button @click="handleClick" class="button" :type="type"><slot/></button>
</template>

<script>
    export default {
        name: "Button",
        props: ['type'],
        methods: {
            handleClick() {
                this.$emit('click')
            }
        }
    }
</script>

<style scoped>
    .button {
        @apply bg-primary;
        @apply text-white;
        @apply py-4;
        @apply px-5;
        @apply rounded-full;
        @apply shadow-md;
        @apply uppercase;
        @apply font-medium;
        @apply text-sm;
    }

    .button:hover {
        @apply bg-primaryDark;
        @apply shadow-lg;
    }

    .button:focus{
        @apply bg-primaryDarker;
        @apply shadow-none;
        outline: none;
    }
</style>