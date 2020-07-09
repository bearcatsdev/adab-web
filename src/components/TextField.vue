<template>
    <div class="text-box-container">
        <i v-if="icon" class="text-box-logo" :data-feather="icon"></i>
        <input :name="name" :placeholder="placeholder" :type="type" class="match-parent text-box">
    </div>
</template>

<script>
    import feather from "feather-icons"
    export default {
        name: "TextField",
        props: ['type', 'name', 'icon', 'placeholder'],
        mounted() {
            feather.replace()
        }
    }
</script>

<style scoped>
    .text-box-logo {
        margin-left: 8px;
    }

    .text-box-container {
        @apply bg-white w-full flex flex-row justify-start items-center;
        border: 2px solid #F8F9FA;
    }

    .text-box {
        @apply bg-white w-full p-3 border-none;
    }
</style>