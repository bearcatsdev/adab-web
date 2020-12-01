<template>
  <span v-if="inline" :style="{ fontSize }">
    <slot />
  </span>
  <div v-else :style="{ fontSize }">
    <slot />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import fonts from '../variables/fonts'

  export default {
    name: 'TextView',
    props: {
      inline: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'base'
      },
      text: String
    },
    computed: {
      ...mapState(['fontOffset']),
      fontSize() {
        return fonts(this.fontOffset)[this.size]
      }
    }
  }
</script>

<style scoped>
  
</style>
