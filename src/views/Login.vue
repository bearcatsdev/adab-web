<template>
    <div class="flex justify-center items-center h-screen">
        <form @submit.prevent="doLogin">
            <card class="login-card">
                <div class="branding">
                    <lottie :options="logo"/>
                </div>
                <div class="w-full">
                    <div class="subtitle">Sign in</div>
                    <text-field icon="user" name="email" placeholder="Email" type="email" v-model="form.username" required/>
                    <text-field icon="lock" name="password" placeholder="Password" type="password" v-model="form.password" required/>
                    <Button class="login-button" type="submit">Login</Button>
                    <div class="error-message"> {{ form.errorMessage }}</div>
                </div>
            </card>
        </form>
    </div>
</template>

<script>
    import Card from "../components/Card"
    import TextField from "../components/TextField"
    import Button from "../components/Button"
    import Lottie from 'vue-lottie'
    import logo from '../assets/lottie/logo.json'

    export default {
        name: "Login",
        components: {Button, TextField, Card, Lottie},
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    errorMessage: ''
                },
                logo: {animationData: logo, loop: false}
            }
        },
        methods: {
            doLogin() {
                this.$store.dispatch('UserCredentials/AUTHENTICATE_USER', {
                    username: this.form.username,
                    password: this.form.password
                }).then(() => {
                    this.$router.push('/app')
                }).catch(error => {
                    if (error.response.data.message) this.form.errorMessage = error.response.data.message
                })

            }
        }
    }
</script>

<style scoped>
    .login-card {
        @apply p-12 flex flex-col items-center;
        width: 24rem;

    }

    @screen lg {
        .login-card {
            @apply flex-row;
            width: 42rem;
        }
        .branding {
            @apply pr-8 pb-0 !important;
        }
    }

    .login-button {
        @apply w-full mt-4;
    }

    .branding {
        @apply	w-4/5 pb-8;
    }

    .subtitle {
        @apply uppercase font-bold text-sm mb-4 text-secondary;
    }

    .error-message {
        @apply text-sm text-danger mt-2;
    }
</style>