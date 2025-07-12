import './App.css'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList'
function App() {
  return (
    <>
      <div className='p-6 max-w-6xl mx-auto'>
        <h1 className='text-center font-bold text-3xl mb-4'>Our Products</h1>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-2' >
            <ProductList></ProductList>
          </div>
         <Cart/>
        </div>
      </div>
    </>
  )
}

export default App
