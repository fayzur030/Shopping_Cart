import { create } from 'zustand'
import { initialState } from '../State/State'
import { cartReducer } from '../Reducer/Cart_Feature'

export const useCartStore = create((set) => ({
  ...initialState,
  dispatch: (action) => set((state) => cartReducer(state, action)),
}))
