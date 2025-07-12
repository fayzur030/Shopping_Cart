/*
payload ta holo javaScript er akta property. payload er jaigay amra onno kisu o ditey parbo jemon value o ditey parbo
*/

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'Add_To_Cart': {
      const exists = state.cart.find((item) => item.id === action.payload.id)
      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      }
    }
    case 'Remove_From_Cart': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    }
    case 'Remove_One_From_Cart': {
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (item.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          ),
        }
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
      }
    }
    case 'Clear_Cart': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }
    }

    default: {
      return state
    }
  }
}
