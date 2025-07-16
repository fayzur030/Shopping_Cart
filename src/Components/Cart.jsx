import { useCartStore } from '../Zustand/Store/Store'

const Cart = () => {
  const cart = useCartStore((state) => state.cart)
  const dispatch = useCartStore((state) => state.dispatch)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className='border p-4 rounded shadow text-center'>
      <h2 className='text-xl font-semibold mb-2'>🛒 Cart </h2>
      <div>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className='justify-center items-center p-2 border-b'
              >
                <h4>
                  {item.title} x {item.quantity}
                </h4>
                <p className='font-medium text-gray-600'>
                  Price: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <div className='flex gap-4 justify-center mt-2'>
                  <button
                    onClick={() =>
                      dispatch({ type: 'Remove_One_From_Cart', payload: item })
                    }
                    className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600'
                  >
                    Remove One
                  </button>

                  {/* <button
                    onClick={() =>
                      dispatch({ type: 'Remove_From_Cart', payload: item })
                    }
                    className='bg-red-600 text-white px-1 py-1 rounded hover:bg-red-700'
                  >
                    ❌ Remove Item
                  </button> */}
                  <button
                    onClick={() =>
                      dispatch({ type: 'Clear_Cart', payload: item })
                    }
                    className='bg-red-600 text-white px-1 py-1 rounded hover:bg-red-700'
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            ))}
            <div className='mt-6 text-xl font-bold text-blue-700'>
              Total: ${total.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
