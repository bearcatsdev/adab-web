<template>
    <div class="announcement-bar">
        <div class="content">
            <div class="title" :style="{ fontSize }">Announcement</div>
            <div class="body" :style="{ fontSize }">Pengumuman Auto Debet Biaya Kuliah Semester Genap 2018/2019</div>
        </div>
        <div @click="closeAnnouncement"><i class="close-icon" data-feather="x"/></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import feather from "feather-icons"
    import fonts from '../../variables/fonts'

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
        computed: {
            ...mapState(['fontOffset']),
            fontSize() {
                return fonts(this.fontOffset)['base']
            }
        }
    }
</script>

<style scoped>
    .announcement-bar {
        @apply w-full;
        @apply bg-dark;
        @apply text-white;
        @apply flex;
        @apply justify-between;
        @apply py-3;
        @apply px-4;
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