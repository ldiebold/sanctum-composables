import { InjectionKey } from 'vue-demi'
import SanctumConfig from './SanctumConfig'

const SanctumAppKey: InjectionKey<SanctumConfig> = Symbol('SanctumDefaultApp')

export {
  SanctumAppKey
}