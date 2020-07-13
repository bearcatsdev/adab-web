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
        @apply bg-primary text-white py-4 px-5 rounded-md shadow-md uppercase font-medium text-sm;
    }

    .button:hover {
        @apply bg-primaryDark shadow-lg;
    }

    .button:focus{
        @apply bg-primaryDarker shadow-none;
        outline: none;
    }
</style>