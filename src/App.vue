<template>
  <div id="app" :class="{ contrast: highContrast }">
    <div :class="{ invert: highContrast }">
      <router-view/>
      <div class="bg" />
    </div>
    <div class="btn-container">
      <button class="btn" @click="toggleContrast()">PENCET GANTI WARNA</button>
      <button class="btn" @click="updateFontOffset(-2)">KURANG</button>
      <button class="btn" @click="updateFontOffset(2)">TAMBO</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { TOGGLE_CONSTRAST, UPDATE_FONT_OFFSET } from '@/store/global/mutations'

  export default {
    computed: {
      ...mapState(['highContrast'])
    },
    methods: {
      ...mapMutations({
        toggleContrast: TOGGLE_CONSTRAST,
        updateFontOffset: UPDATE_FONT_OFFSET
      })
    }
  }
</script>

<style scoped>
  .contrast {
    filter: brightness(200%);
    min-height: 100vh;
  }

  .invert {
    filter: invert(100%);
    min-height: 100vh;
  }

  .bg {
    @apply absolute w-full h-full bg-background top-0 left-0;
    z-index: -1;
  }

  .btn-container {
    @apply flex flex-row items-center fixed;
    bottom: 4rem;
    left: 4rem;
  }

  .btn {
    background-color: red;
    padding: 1rem;
  }
</style>
