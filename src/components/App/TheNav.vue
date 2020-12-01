<template>
    <div class="nav">
        <div class="profile-section">
            <img class="profile-picture" src="/api/v1/user/picture" alt="Profile picture">
            <div :style="{ fontSize }" class="user-name">{{ currentUser['user_name'] }}</div>
            <div :style="{ fontSize: fontSizeSm }" class="user-email">{{ currentUser['user_email'] }}</div>
        </div>

        <hr>

        <ul class="nav-items-container">
            <div class="nav-items">
                <li><nav-link icon="home" to="/app/dashboard">Dashboard</nav-link></li>
                <li><nav-link icon="inbox" to="/app/inbox">Inbox</nav-link></li>
                <li><nav-link icon="book" to="/app/class">Class</nav-link></li>
                <li><nav-link icon="message-square" to="/app/discussion">Discussion</nav-link></li>
                <li><nav-link icon="calendar" to="/app/schedule">Schedule</nav-link></li>
            </div>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import fonts from '../../variables/fonts'
    import NavLink from "./NavLink";
    export default {
        name: "TheNav",
        components: { NavLink },
        props: ['currentUser'],
        computed: {
            ...mapState(['fontOffset']),
            fontSize() {
                return fonts(this.fontOffset)['base']
            },
            fontSizeSm() {
                return fonts(this.fontOffset)['sm']
            },
        }
    }
</script>

<style scoped>
    .nav {
        @apply float-none;
        @apply fixed;
        @apply bottom-0;
        @apply w-screen;
        @apply bg-white;
        @apply h-16;
    }

    .nav-items-container {
        @apply flex;
        @apply h-full;
    }

    .nav-items {
        @apply flex;
        @apply justify-around;
        @apply items-center;
        @apply w-screen;
    }

    .profile-section {
        @apply hidden;
    }

    .profile-picture {
        @apply rounded-full;
        @apply object-cover;
        @apply h-24;
        @apply w-24;
    }

    .user-name {
        @apply mt-2;
    }

    .user-email {
        @apply text-secondary;
    }

    @screen lg {
        .nav {
            @apply w-72;
            @apply h-screen;
        }

        .nav-items-container {
            @apply h-auto;
            @apply justify-center;
            @apply my-4;
        }

        .nav-items {
            @apply flex-col items-start w-full;
        }

        .profile-section {
            @apply flex;
            @apply flex-col;
            @apply mt-8;
            @apply mb-4;
            @apply items-center;
        }
    }

    li {
        @apply w-full;
    }
</style>