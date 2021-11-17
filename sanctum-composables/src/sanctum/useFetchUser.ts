import { createGlobalState } from '@vueuse/shared'
import { ref } from 'vue-demi'
import getSanctumConfig from './getSanctumConfig'
import handlesErrors from './handlesErrors'
import useAuthState from './useAuthState'

export default function () {
  const { requester } = getSanctumConfig()
  const { getUser } = requester

  const { loading } = createGlobalState(() => {
    return {
      loading: ref(false)
    }
  })()

  const { user, authIsReady } = useAuthState()
  const {
    hasErrors,
    errors,
    resetStandardErrors,
    reset,
    fromResponse: setErrorsFromResponse
  } = handlesErrors()

  const fetch = async () => {
    loading.value = true
    const response = await getUser()
    if (response.error) {
      setErrorsFromResponse(response)
      loading.value = false
      authIsReady.value = true
      return
    }

    authIsReady.value = true
    user.value = response.data
    loading.value = false
  }

  return {
    fetch,
    loading,

    // Error Handling
    hasErrors,
    errors,
    resetStandardErrors,
    reset
  }
}
