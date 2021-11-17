import useAuthState from '../useAuthState'
import { ref, unref, watch, WatchStopHandle, watchEffect } from 'vue-demi'
import { RouteLocationRaw, useRouter, Router } from 'vue-router'
import { MaybeRef } from '@vueuse/core'
import useFetchUser from '../useFetchUser'

type UserOnCheckedFunction = (user: unknown | null) => void
type RedirectTriggers = 'authenticated' | 'unauthenticated' | 'error'

export default function useAuthRedirector(
  redirectOn: RedirectTriggers,
  redirectTo: MaybeRef<RouteLocationRaw>,
  router: Router = useRouter()
) {
  const checking = ref(false)
  const { loading: fetchingUser, fetch: fetchUser } = useFetchUser()

  const {
    isAuthenticated,
    user,
    authIsReady
  } = useAuthState()

  watchEffect(() => {
    if (user.value !== null) {
      authIsReady.value = true
    }
  })

  const onChecked = ref(null as null | UserOnCheckedFunction)

  function exec() {
    if (typeof onChecked.value === 'function') {
      onChecked.value(user.value)
    }
    triggerRedirect()
  }

  function execOnAuthStateEnsured() {
    if (authIsReady.value) {
      return exec()
    }
    return execOnAuthStateChange()
  }

  let authReadyWatcher: WatchStopHandle | undefined
  function execOnAuthStateChange() {
    if (authIsReady.value === false) {
      checking.value = true
      authReadyWatcher = watch(authIsReady, newAuthIsReady => {
        authIsReady.value = newAuthIsReady
        if (typeof onChecked.value === 'function') {
          onChecked.value(user)
        }

        if (!isAuthenticated.value && redirectOn === 'unauthenticated') {
          router.push(unref(redirectTo))
        }

        if (isAuthenticated.value && redirectOn === 'authenticated') {
          router.push(unref(redirectTo))
        }

        checking.value = false
        if (authReadyWatcher !== undefined) {
          authReadyWatcher()
        }
      })
    }

    if (fetchingUser.value === false) {
      fetchUser()
    }
  }

  function triggerRedirect() {
    if (isAuthenticated.value && redirectOn === 'authenticated') {
      router.push(unref(redirectTo))
    }
    if (!isAuthenticated.value && redirectOn === 'unauthenticated') {
      router.push(unref(redirectTo))
    }
  }

  return {
    execOnAuthStateChange,
    execOnAuthStateEnsured,
    exec,
    redirectTo,
    checking,
    onChecked
  }
}