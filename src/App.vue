<template>
  <div id="app" :class="{ contrast: highContrast }">
    <div :class="{ invert: highContrast }">
      <router-view/>
      <div class="bg" />
    </div>
    <button class="btn" @click="toggleContrast()">PENCET GANTI WARNA</button>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { TOGGLE_CONSTRAST } from '@/store/global/mutations'

  export default {
    computed: {
      ...mapState(['highContrast'])
    },
    methods: {
      ...mapMutations({
        toggleContrast: TOGGLE_CONSTRAST
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

  .btn {
    position: fixed;
    bottom: 4rem;
    left: 4rem;
    background-color: red;
    padding: 1rem;
  }
</style>
