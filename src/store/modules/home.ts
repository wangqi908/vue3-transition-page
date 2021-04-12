import { ActionContext } from 'vuex'
import { StateType } from '@/types'

export interface HomeState {
  num: number
}

const state: HomeState = {
  num: 1
}

const mutations = {
  add (state: HomeState, val: number): void {
    state.num += val
  }
}

const actions = {
  addAsync (
    { commit }: ActionContext<HomeState, StateType>,
    payload: number
  ): void {
    setTimeout(() => {
      commit('add', 5)
    }, payload)
  }
}

const getters = {
  doubleNum: (state: HomeState) => (val: number): number => {
    return state.num * val
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
