<template>
    <router-link :to="to" class="router-link" active-class="active">
        <i v-if="icon" class="text-box-logo" :data-feather="icon"/>
        <div class="lg:ml-6"><slot/></div>
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
        @apply no-underline text-body flex flex-col items-center;
    }

    .router-link:hover {
        @apply text-primaryDark;
    }

    .active {
        @apply text-primary;
    }

    /*Selector for large screen*/
    @screen lg {
        .router-link {
            @apply flex-row h-12;
        }
    }
</style>