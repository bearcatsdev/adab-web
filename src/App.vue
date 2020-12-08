<template>
  <div id="app" :class="{ contrast: highContrast }">
    <div :class="{ invert: highContrast }">
      <router-view/>
      <div class="bg" />
    </div>
    <accessibility-control class="accessibility-control"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import AccessibilityControl from "./components/App/AccessibilityControl";

  export default {
    components: {AccessibilityControl},
    computed: {
      ...mapState(['highContrast'])
    },
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

  .accessibility-control {
    @apply fixed left-0 bottom-0;
  }

  .btn {
    background-color: red;
    padding: 1rem;
  }
</style>
