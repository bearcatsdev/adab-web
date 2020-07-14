<template>
    <div class="section">
        <div class="header">
            <div class="ml-2 mr-4" v-if="icon">
                <i :data-feather="icon"/>
            </div>
            <div class="flex flex-col">
                <div class="title">{{ title }}</div>
                <div class="subtitle" v-if="subtitle">{{ subtitle }}</div>
            </div>
        </div>
        <div class="divider"/>
        <div class="body">
            <slot/>
        </div>
    </div>
</template>

<script>
    import feather from "feather-icons";

    export default {
        name: "Section",
        props: ['title', 'subtitle', 'icon'],
        mounted() {
            feather.replace()
        }
    }
</script>

<style scoped>
    .section {
        @apply flex inline-block flex-col py-2 px-4 bg-white;
    }

    .header {
        @apply flex items-center py-2 font-medium;
    }

    .divider {
        @apply border-b-2 border-background -mx-4 my-2;
    }

    .subtitle {
        @apply text-sm text-secondary;
    }
</style>