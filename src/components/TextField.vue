<template>
    <div @mouseover="isHover = true"
         @mouseleave="isHover = false"
         class="text-box-container"
         :class="{ active: isActive, hover:isHover}" >
        <input @focus="isActive = true; isHover = false"
               @blur="isActive = false"
               @input="$emit('input', $event.target.value)"
               class="text-box-input"
               :style="{ fontSize }"
               :name="name"
               :placeholder="placeholder"
               :type="type"
               :value="value"
               :required="required">
        <div :class="{ active: isActive }">
            <i v-if="icon" class="text-box-logo"  :data-feather="icon"></i>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import feather from "feather-icons"
    import fonts from '../variables/fonts'

    export default {
        components: {},
        name: "TextField",
        props: ['type', 'name', 'icon', 'placeholder', 'value', 'required'],
        data() {
            return {
                isActive: false,
                isHover: false,
            }
        },
        mounted() {
            feather.replace()
        },
        computed: {
            ...mapState(['fontOffset']),
            fontSize() {
                return fonts(this.fontOffset)['sm']
            }
        }
    }
</script>

<style scoped>
    .text-box-logo {
        height: 44px;
        margin-left: 12px;
        @apply inline-block absolute;
    }

    .active {
        @apply text-primaryDark border-primaryDark !important;
    }

    .hover {
        @apply border-secondary !important;
    }

    .text-box-container {
        @apply bg-white;
        @apply w-full;
        @apply block;
        @apply relative;
        @apply items-center;
        @apply rounded-lg;
        @apply mb-4;
        border: 2px solid #F8F9FA;
        height: 48px;
    }

    .text-box-input {
        padding-left: 45px;
        height: 44px;
        @apply bg-white;
        @apply text-black;
        @apply absolute;
        @apply inline-block;
        @apply w-full;
        @apply rounded-lg;
        @apply border-none;
        @apply outline-none;
    }
</style>