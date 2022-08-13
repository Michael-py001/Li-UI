import state from './state'
import getters from './getters'
import actions from './actions'
import { defineStore } from 'pinia';
export default defineStore('User', {
  ...state,
  ...getters,
  ...actions
});