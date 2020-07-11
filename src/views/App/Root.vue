<template>
    <div>
        <the-nav :currentUser="currentUser"/>
        <router-view class="content"/>
    </div>
</template>

<script>
    import TheNav from "../../components/App/TheNav";
    import {mapState} from "vuex";
    export default {
        name: "Home",
        components: {TheNav},
        computed: {
            ...mapState('UserCredentials', ['currentUser'])
        },
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