import { Ref, ComputedRef } from 'vue'

interface AuthState {
  authIsReady: Ref<boolean>
  isAuthenticated: ComputedRef<boolean>
  user: Record<string | number, any>
}

type UseAuthState = () => AuthState

export default UseAuthState

export {
  AuthState
}