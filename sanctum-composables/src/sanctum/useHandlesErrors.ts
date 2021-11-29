import { ref, computed } from 'vue-demi'
import ResponseErrors from './types/ResponseErrors'
import { SanctumResponse } from './types/Requester'
import { UseHandlesErrors, ValidationErrors } from 'auth-composables'

export const useHandlesErrors: UseHandlesErrors = () => {
  const errors = ref<ResponseErrors>([])
  const hasErrors = computed(() => !!errors.value.length)
  function resetStandardErrors() {
    errors.value = []
  }

  const validationErrors = ref<ValidationErrors>({})
  const hasValidationErrors = computed(() => {
    return !!Object.keys(validationErrors.value).length
  })
  function resetValidationErrors() {
    validationErrors.value = {}
  }

  function reset() {
    resetStandardErrors()
    resetValidationErrors()
  }

  function fromResponse(response: SanctumResponse) {
    reset()
    errors.value.push({
      type: response.statusCode?.toString() || 'unknown',
      message: response.response?.statusText || 'unknown error'
    })
    if (response.statusCode === 422 && response.asJson()?.errors) {
      const errorBag = response.asJson().errors as ValidationErrors
      validationErrors.value = errorBag
    }
  }

  return {
    validationErrors,
    hasValidationErrors,
    hasErrors,
    errors,
    resetStandardErrors,
    resetValidationErrors,
    reset,
    fromResponse
  }
}

export default useHandlesErrors