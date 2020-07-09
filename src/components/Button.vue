<template>
    <button :on-click="onClick" class="button"><slot/></button>
</template>

<script>
    export default {
        name: "Button",
        props: ['onClick']
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