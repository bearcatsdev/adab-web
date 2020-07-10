<template>
    <div class="nav">
        <ul class="nav-items">
            <li><nav-link icon="home" to="/app/dashboard">Dashboard</nav-link></li>
            <li><nav-link icon="inbox" to="/app/inbox">Inbox</nav-link></li>
            <li><nav-link icon="book" to="/app/class">Class</nav-link></li>
            <li><nav-link icon="message-square" to="/app/discussion">Discussion</nav-link></li>
            <li><nav-link icon="calendar" to="/app/schedule">Schedule</nav-link></li>
        </ul>
    </div>
</template>

<script>
    import NavLink from "./NavLink";
    export default {
        name: "TheNav",
        components: {NavLink}
    }
</script>

<style scoped>
    .nav {
        @apply float-none fixed bottom-0 w-screen bg-white h-16;
    }

    .nav-items {
        @apply flex justify-around items-center h-full;
    }

    @screen lg {
        .nav {
            @apply w-56 h-screen;
        }

        .nav-items {
            @apply flex-col h-auto items-start;
        }
    }

    @screen xl {
        .nav {
            @apply w-72;
        }
    }
</style>