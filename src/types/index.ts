import { HomeState } from '../store/modules/home'
import { AboutState } from '../store/modules/about'

type VuexModuleType = {
  home: HomeState
  about: AboutState
}

export type StateType = VuexModuleType
