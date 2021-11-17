import getSanctumConfig from './getSanctumConfig'
import { ref } from 'vue-demi'
import useAuthState from './useAuthState'
import handlesErrors from './handlesErrors'

export default function () {
  const loading = ref(false)
  const { requester } = getSanctumConfig()
  const { register: registerRequest, getUser } = requester

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
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const register = async () => {
    loading.value = true
    const registerResponse = await registerRequest(form.value)
    if (registerResponse.error) {
      setErrorsFromResponse(registerResponse)
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
    register,
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
