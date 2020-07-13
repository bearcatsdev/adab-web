<template>
    <div class="flex justify-center items-center h-screen">
        <form @submit.prevent="doLogin">
            <card class="login-card">
                <img class="branding" alt="Adab" src="../assets/icons/adab.svg"/>
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

    export default {
        name: "Login",
        components: {Button, TextField, Card},
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    errorMessage: ''
                }
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
            @apply ml-8 mr-16;
        }
    }

    .login-button {
        @apply w-full mt-4;
    }

    .branding {
        @apply w-32 py-6;
    }

    .subtitle {
        @apply uppercase font-bold text-sm mb-4 text-secondary;
    }

    .error-message {
        @apply text-sm text-danger mt-2;
    }
</style>