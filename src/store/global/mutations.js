export const TOGGLE_CONSTRAST = 'TOGGLE_CONTRAST'
export const UPDATE_FONT_OFFSET = 'UPDATE_FONT_OFFSET'

export default {
  [TOGGLE_CONSTRAST](state) {
    state.highContrast = !state.highContrast
  },
  [UPDATE_FONT_OFFSET](state, value) {
    state.fontOffset += value
  }
}
