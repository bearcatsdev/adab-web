<template>
    <button @click="handleClick" class="button"><slot/></button>
</template>

<script>
    export default {
        name: "Button",
        methods: {
            handleClick() {
                this.$emit('click')
            }
        }
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