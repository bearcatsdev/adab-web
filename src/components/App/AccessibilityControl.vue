<template>
    <card class="content space-x-4">
        <button><img src="@/assets/icons/decrease_fontsize.png" alt="Decrease text size" @click="updateFontOffset(-2)"></button>
        <button><img src="@/assets/icons/increase_fontsize.png" alt="Increase text size" @click="updateFontOffset(2)"></button>
        <button><img src="@/assets/icons/highcontrast.png" alt="Toggle high contrast" @click="toggleContrast()"></button>
    </card>
</template>

<script>
    import {mapMutations} from "vuex";
    import { TOGGLE_CONSTRAST, UPDATE_FONT_OFFSET } from '@/store/global/mutations'
    import Card from "@/components/Card";

    export default {
        name: "AccessibilityControl",
        components: { Card },
        methods: {
            ...mapMutations({
                toggleContrast: TOGGLE_CONSTRAST,
                updateFontOffset: UPDATE_FONT_OFFSET
            })
        }
    }
</script>

<style scoped>
    .content {
        @apply flex flex-row items-center px-4 py-2;
    }
</style>
