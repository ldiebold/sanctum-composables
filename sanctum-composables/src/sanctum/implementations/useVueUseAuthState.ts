import { computed, ref } from 'vue-demi'
import { createGlobalState } from "@vueuse/shared"

export default createGlobalState(() => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)
  const authIsReady = ref(false)

  return {
    authIsReady,
    isAuthenticated,
    user
  }
})