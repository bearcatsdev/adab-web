<template>
    <div class="flex justify-center items-center h-screen">
        <card class="login-card">
            <img class="branding" alt="Adab" src="../assets/icons/adab.svg"/>
            <div class="w-full">
                <div class="subtitle">Sign in</div>
                <text-field icon="user" name="email" placeholder="Email" type="email"/>
                <text-field icon="lock" name="password" placeholder="Password" type="password"/>
                <Button class="login-button">Login</Button>
            </div>
        </card>
    </div>
</template>

<script>
    import Card from "../components/Card";
    import TextField from "../components/TextField";
    import Button from "../components/Button";
    export default {
        name: "Login",
        components: {Button, TextField, Card}
    }
</script>

<style scoped>
    .login-card {
        @apply p-6 flex flex-col items-center;
        width: 24rem;
    }

    .login-button {
        @apply w-full mt-4;
    }

    .branding {
        @apply w-32 py-6;
    }

    .subtitle {
        @apply uppercase font-bold text-sm mb-4;
    }
</style>