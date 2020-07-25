<template>
    <div class="section" :style="{'background-color': color}">
        <div class="header" v-if="title">
            <div class="header-icon" v-if="icon">
                <i :data-feather="icon"/>
            </div>
            <div class="flex flex-col">
                <div class="title">{{ title }}</div>
                <div class="subtitle" v-if="subtitle">{{ subtitle }}</div>
            </div>
        </div>
        <div class="divider" v-if="title"/>
        <div class="body">
            <slot/>
        </div>
    </div>
</template>

<script>
    import feather from "feather-icons";

    export default {
        name: "Section",
        props: ['title', 'subtitle', 'icon', 'color'],
        mounted() {
            feather.replace()
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
        @apply text-sm;
        @apply text-secondary;
    }
</style>