import getSanctumConfig from './getSanctumConfig'
import { ref } from 'vue-demi'

export default function () {
  const loading = ref(false)
  const { requester } = getSanctumConfig()

  const form = ref({
    email: '',
    password: ''
  })

  const register = async () => {
    loading.value = true
    try {
      await requester.register(form.value)
    } catch (err) {
      console.log('handle error here')
      return err
    }
    loading.value = false
  }

  return {
    form,
    register,
    loading,
    // error,
    // hasError
  }
}
