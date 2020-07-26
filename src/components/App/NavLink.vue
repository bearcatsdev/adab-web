<template>
    <router-link :to="to" class="router-link" active-class="active" >
        <i v-if="icon" class="router-icon" :data-feather="icon"/>
        <div class="router-text"><slot/></div>
    </router-link>
</template>

<script>
    import feather from "feather-icons";

    export default {
        name: "NavLink",
        props: ['icon', 'to'],
        mounted() {
            feather.replace()
        },
    }
</script>

<style scoped>
    .router-link {
        @apply text-gray-400;
        @apply no-underline;
        @apply flex;
        @apply flex-col;
        @apply items-center;
        @apply w-full;
        @apply font-medium;
    }

    .router-link:hover {
        @apply text-primaryDarker;
    }

    .router-text {
        display: none;
    }

    .active {
        cursor: default;
        @apply text-primaryDarker;
    }

    /*Selector for large screen*/
    @screen lg {
        .router-link {
            height: 56px;
            @apply flex-row;
            @apply rounded-lg;
        }

        .router-link:hover {
            @apply shadow-lg;
            @apply bg-background;
            @apply text-primaryDarker;
        }


        .active:hover  {
            @apply shadow-none;
            @apply bg-transparent;
        }


        .router-icon {
            @apply ml-6;
        }

        .router-text {
            @apply ml-6;
        }

        .active {
            @apply text-primaryDarker;
            @apply bg-transparent;
            @apply shadow-none;
        }

        .router-link > .router-text {
            display: block;
        }
    }
</style>