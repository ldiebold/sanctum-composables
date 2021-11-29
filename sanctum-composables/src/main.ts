// Plugin
import sanctumPlugin from './sanctum/sanctumPlugin'

// implementations
import makeFetchRequester from './sanctum/implementations/makeFetchRequester'

// Auth
import useIdentityPasswordLogin from './sanctum/useIdentityPasswordLogin'
import useIdentityPasswordRegister from './sanctum/useIdentityPasswordRegister'
import useAuthState from './sanctum/useAuthState'
import useLogout from './sanctum/useLogout'
import useFetchUser from './sanctum/useFetchUser'

import getSanctumConfig from './sanctum/getSanctumConfig'

// Utils
import useAuthRedirector from './sanctum/utils/useAuthRedirector'
import useAuthenticatedRedirector from './sanctum/utils/useAuthenticatedRedirector'
import useUnauthenticatedRedirector from './sanctum/utils/useUnauthenticatedRedirector'
import useHandlesErrors from './sanctum/useHandlesErrors'

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
  useIdentityPasswordRegister,
  useIdentityPasswordLogin,
  // useApp,
  useAuthRedirector,
  useAuthenticatedRedirector,
  useUnauthenticatedRedirector,
  useHandlesErrors,
  // useFirestore
}
