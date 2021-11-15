import { inject } from "vue-demi"
import { SanctumAppKey } from "./types/symbols"

export default function () {
  const config = inject(SanctumAppKey)
  if (!config) {
    throw new Error(`Could not resolve ${SanctumAppKey}. Have you installed the plugin?`);
  }
  return config
}
