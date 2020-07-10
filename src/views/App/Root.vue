<template>
    <div>
        <the-nav/>
        <router-view class="content"/>
    </div>
</template>

<script>
    import TheNav from "../../components/App/TheNav";
    export default {
        name: "Home",
        components: {TheNav}
    }
</script>

<style scoped>
    @screen lg {
        .content {
            @apply ml-56;
        }
    }

    @screen xl {
        .content {
            @apply ml-72;
        }
    }
</style>