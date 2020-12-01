<template>
    <div class="section" :style="{'background-color': color}">
        <div class="header" v-if="title">
            <div class="header-icon" v-if="icon">
                <i :data-feather="icon"/>
            </div>
            <div class="flex flex-col">
                <div class="title" :style="{ fontSize }">{{ title }}</div>
                <div class="subtitle" :style="{ fontSize: fontSizeSm }" v-if="subtitle">{{ subtitle }}</div>
            </div>
        </div>
        <div class="divider" v-if="title"/>
        <div class="body">
            <slot/>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import feather from "feather-icons"
    import fonts from '../../variables/fonts'

    export default {
        name: "Section",
        props: ['title', 'subtitle', 'icon', 'color'],
        mounted() {
            feather.replace()
        },
        computed: {
            ...mapState(['fontOffset']),
            fontSize() {
                return fonts(this.fontOffset)['base']
            },
            fontSizeSm() {
                return fonts(this.fontOffset)['sm']
            },
        }
    }
</script>

<style scoped>
    .section {
        @apply flex;
        @apply inline-block;
        @apply flex-col;
        @apply py-2;
        @apply px-4;
        @apply bg-white;
        @apply rounded-lg;
        @apply border;
    }

    .header {
        @apply flex;
        @apply items-center;
        @apply py-2;
    }

    .header-icon {
        @apply ml-2;
        @apply mr-4;
        @apply text-primary;
        @apply shadow-primary;
        @apply px-2;
        @apply py-2;
        @apply rounded-lg;
    }

    .divider {
        @apply border-b-2;
        @apply border-background;
        @apply -mx-4;
        @apply my-2;
    }

    .title {
        @apply font-bold;
        @apply text-secondary;
    }


    .subtitle {
        @apply text-secondary;
    }
</style>