export const TOGGLE_CONSTRAST = 'TOGGLE_CONTRAST'

export default {
  [TOGGLE_CONSTRAST](state) {
    state.highContrast = !state.highContrast
  }
}
