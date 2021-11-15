// Plugin
import sanctumPlugin from './sanctum/sanctumPlugin'

// implementations
import makeFetchRequester from './sanctum/implementations/makeFetchRequester'

// Auth
import useEmailLogin from './sanctum/useEmailLogin'
import useAuthState from './sanctum/useAuthState'
import useLogout from './sanctum/useLogout'
import useFetchUser from './sanctum/useFetchUser'

import getSanctumConfig from './sanctum/getSanctumConfig'

export {
  sanctumPlugin,
  makeFetchRequester,
  getSanctumConfig,
  useFetchUser,
  // getFirestore,
  // useAuthRedirector,
  // useFirebaseAuthProvider,
  // useFirebaseFacebookAuth,
  // useFirebaseGithubAuth,
  // useFirebaseGoogleAuth,
  // useFirebaseTwitterAuth,
  useAuthState,
  useLogout,
  // useEmailRegister,
  useEmailLogin,
  // useApp,
  // useAuthenticatedRedirector,
  // useUnauthenticatedRedirector,
  // handlesErrors,
  // useFirestore
}
