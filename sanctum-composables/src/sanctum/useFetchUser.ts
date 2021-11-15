import { ref } from 'vue-demi'
import getSanctumConfig from './getSanctumConfig'
import handlesErrors from './handlesErrors'
import useAuthState from './useAuthState'

export default function () {
  const loading = ref(false)
  const { requester } = getSanctumConfig()
  const { getUser } = requester

  const { user } = useAuthState()
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
      return
    }

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
