import getSanctumConfig from "./getSanctumConfig"

export default function useAuthState() {
  const config = getSanctumConfig()
  return config.useAuthState()
}
