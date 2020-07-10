<template>
    <div class="announcement-bar">
        <div class="content">
            <div class="title">Announcement</div>
            <div class="body">Pengumuman Auto Debet Biaya Kuliah Semester Genap 2018/2019</div>
        </div>
        <div @click="closeAnnouncement"><i class="close-icon" data-feather="x"/></div>
    </div>
</template>

<script>
    import feather from "feather-icons";

    export default {
        name: "AnnouncementBar",
        methods: {
            closeAnnouncement() {
                this.$emit('close')
            }
        },
        mounted() {
            feather.replace()
        },
    }
</script>

<style scoped>
    .announcement-bar {
        @apply w-full bg-primary text-white flex justify-between py-3 px-4;
    }

    .content {
        @apply flex;
    }

    .body {
        @apply ml-6;
    }

    .title {
        @apply font-medium;
    }

    .close-icon:hover {
        @apply cursor-pointer;
    }
</style>