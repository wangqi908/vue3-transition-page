import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import modules from './modules'
import { StateType } from '../types'

export const key: InjectionKey<Store<StateType>> = Symbol('key')

const store: Store<StateType> = createStore({
  modules
})

export function useStore (): Store<StateType> {
  return baseUseStore(key)
}
export default store
