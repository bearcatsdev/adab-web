<template>
    <div class="nav">
        <div class="profile-section">
            <img class="profile-picture" src="/api/v1/user/picture" alt="Profile picture">
            <div class="user-name">{{ currentUser['user_name'] }}</div>
            <div class="user-email">{{ currentUser['user_email'] }}</div>
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
    import NavLink from "./NavLink";
    export default {
        name: "TheNav",
        components: {NavLink},
        props: ['currentUser']
    }
</script>

<style scoped>
    .nav {
        @apply float-none fixed bottom-0 w-screen bg-white h-16;
    }

    .nav-items-container {
        @apply flex h-full;
    }

    .nav-items {
        @apply flex justify-around items-center w-screen;
    }

    .profile-section {
        @apply hidden;
    }

    .profile-picture {
        @apply rounded-full object-cover h-24 w-24;
    }

    .user-name {
        @apply mt-2;
    }

    .user-email {
        @apply text-sm text-secondary;
    }

    @screen lg {
        .nav {
            @apply w-56 h-screen;
        }

        .nav-items-container {
            @apply h-auto justify-center my-4;
        }

        .nav-items {
            @apply flex-col items-start w-full;
        }

        .profile-section {
            @apply flex flex-col mt-8 mb-4 items-center;
        }
    }

    @screen xl {
        .nav {
            @apply w-72;
        }
    }

    li {
        @apply w-full;
    }
</style>