<template>
    <a :href="href" :target="target" :style="{ fontSize }" class="button"><slot/></a>
</template>

<script>
    import { mapState } from 'vuex'
    import fonts from '../variables/fonts'

    export default {
        name: "LinkButton",
        props: ['href', 'target'],
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
        @apply py-2;
        @apply px-5;
        @apply rounded-md;
        @apply shadow-md;
        @apply uppercase;
        @apply font-medium;
    }
    .button:hover {
        @apply bg-primaryDark;
    }
</style>