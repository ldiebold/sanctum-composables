// Plugin
import sanctumPlugin from './sanctum/sanctumPlugin'

// implementations
import makeFetchRequester from './sanctum/implementations/makeFetchRequester'

// Auth
import useEmailLogin from './sanctum/useEmailLogin'
import useEmailRegister from './sanctum/useEmailRegister'
import useAuthState from './sanctum/useAuthState'
import useLogout from './sanctum/useLogout'
import useFetchUser from './sanctum/useFetchUser'

import getSanctumConfig from './sanctum/getSanctumConfig'

// Utils
import useAuthRedirector from './sanctum/utils/useAuthRedirector'
import useAuthenticatedRedirector from './sanctum/utils/useAuthenticatedRedirector'
import useUnauthenticatedRedirector from './sanctum/utils/useUnauthenticatedRedirector'
import handlesErrors from './sanctum/handlesErrors'

export {
  sanctumPlugin,
  makeFetchRequester,
  getSanctumConfig,
  useFetchUser,
  // getFirestore,
  // useFirebaseAuthProvider,
  // useFirebaseFacebookAuth,
  // useFirebaseGithubAuth,
  // useFirebaseGoogleAuth,
  // useFirebaseTwitterAuth,
  useAuthState,
  useLogout,
  useEmailRegister,
  useEmailLogin,
  // useApp,
  useAuthRedirector,
  useAuthenticatedRedirector,
  useUnauthenticatedRedirector,
  handlesErrors,
  // useFirestore
}
