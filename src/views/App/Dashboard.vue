<template>
    <div>
        <announcement-bar v-if="showAnnouncement" @close="showAnnouncement = false"/>
    </div>
</template>

<script>
    import AnnouncementBar from "../../components/App/AnnouncementBar";
    export default {
        name: "Dashboard",
        components: {AnnouncementBar},
        data () {
            return {
                showAnnouncement: true
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>