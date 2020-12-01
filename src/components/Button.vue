<template>
    <button @click="handleClick" :style="{ fontSize }" class="button" :type="type"><slot/></button>
</template>

<script>
    import { mapState } from 'vuex'
    import fonts from '../variables/fonts'

    export default {
        name: "Button",
        props: ['type'],
        methods: {
            handleClick() {
                this.$emit('click')
            }
        },
        computed: {
            ...mapState(['fontOffset']),
            fontSize() {
                return fonts(this.fontOffset)['sm']
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