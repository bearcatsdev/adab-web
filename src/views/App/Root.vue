<template>
    <div>
        <the-nav :currentUser="currentUser"/>
        <router-view class="content"/>
    </div>
</template>

<script>
    import TheNav from "../../components/App/TheNav";
    import {mapState} from "vuex";
    import feather from 'feather-icons';

    export default {
        name: "Home",
        components: {TheNav},
        computed: {
            ...mapState('UserCredentials', ['currentUser'])
        },
        mounted() {
            // get user profile
            this.$store.dispatch('UserCredentials/GET_CURRENT_USER')
                .catch(error => {
                    if (error.response.status === 401) {
                        // unauthorized
                        this.$router.push('/login')
                    }
                })

            // get user sessions
            this.$store.dispatch('UserCredentials/GET_SESSIONS')
                .catch(error => {
                    if (error.response.status === 401) {
                        // unauthorized
                        this.$router.push('/login')
                    }
                }).then(() => {

                // feather
                feather.replace()
            })
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