import { ref } from 'vue-demi'
import getSanctumConfig from './getSanctumConfig'
import handlesErrors from './handlesErrors'
import useAuthState from './useAuthState'

export default function () {
  const loading = ref(false)
  const { requester } = getSanctumConfig()
  const { logout: logoutRequest } = requester

  const { user } = useAuthState()
  const {
    hasErrors,
    errors,
    resetStandardErrors,
    reset,
    fromResponse: setErrorsFromResponse
  } = handlesErrors()

  const logout = async () => {
    loading.value = true
    const response = await logoutRequest()
    if (response.error) {
      setErrorsFromResponse(response)
      loading.value = false
      return
    }

    user.value = null
    loading.value = false
  }

  return {
    logout,
    loading,

    // Error Handling
    hasErrors,
    errors,
    resetStandardErrors,
    reset
  }
}
