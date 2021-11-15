import { ref } from 'vue-demi'
import getSanctumConfig from './getSanctumConfig'
import handlesErrors from './handlesErrors'
import useAuthState from './useAuthState'

export default function () {
  const loading = ref(false)
  const { requester } = getSanctumConfig()
  const { login: loginRequest, getUser } = requester

  const { user } = useAuthState()
  const {
    validationErrors,
    hasValidationErrors,
    hasErrors,
    errors,
    resetStandardErrors,
    resetValidationErrors,
    reset,
    fromResponse: setErrorsFromResponse
  } = handlesErrors()

  const form = ref({
    email: '',
    password: ''
  })

  const login = async () => {
    loading.value = true
    const loginResponse = await loginRequest(form.value)
    if (loginResponse.error) {
      setErrorsFromResponse(loginResponse)
      loading.value = false
      return
    }

    const fetchUserResponse = await getUser()
    if (fetchUserResponse.error) {
      setErrorsFromResponse(fetchUserResponse)
      loading.value = false
      return
    }

    user.value = fetchUserResponse.data
    loading.value = false
  }

  return {
    form,
    login,
    loading,

    // Error Handling
    validationErrors,
    hasValidationErrors,
    hasErrors,
    errors,
    resetStandardErrors,
    resetValidationErrors,
    reset
  }
}
