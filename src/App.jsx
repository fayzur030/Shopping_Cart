import './App.css'
import Cart from './Components/Cart'
import ProductList from './Components/ProductList'
function App() {
  return (
    <>
      <div className="p-6 max-w-full mx-auto min-h-screen bg-gray-100">
        <h1 className='text-center font-bold text-3xl mb-4'>Our Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[80vh]'>
          <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
            <ProductList></ProductList>
          </div>
          <div className="bg-white rounded-lg shadow p-4  overflow-auto sticky top-4">
            <Cart />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
