<template>
    <div class="text-box-container" :class="{ active: isActive }">
        <i v-if="icon" class="text-box-logo" :data-feather="icon"></i>
        <input @focus="isActive = true"
               @blur="isActive = false"
               @input="$emit('input', $event.target.value)"
               class="text-box"
               :name="name"
               :placeholder="placeholder"
               :type="type"
               :value="value"
               :required="required"
        >
    </div>
</template>

<script>
    import feather from "feather-icons"
    export default {
        name: "TextField",
        props: ['type', 'name', 'icon', 'placeholder', 'value', 'required'],
        data() {
            return {
                isActive: false
            }
        },
        mounted() {
            feather.replace()
        },
    }
</script>

<style scoped>
    .text-box-logo {
        margin-left: 8px;
    }

    .active {
        @apply border-black !important;
    }

    .text-box-container {
        @apply bg-white w-full flex flex-row justify-start items-center rounded-md;
        border: 2px solid #F8F9FA;
    }

    .text-box {
        @apply bg-white w-full p-3 border-none outline-none;
    }
</style>