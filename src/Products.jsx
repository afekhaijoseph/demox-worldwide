import  Product from "./components/Product"
import Subheading from "./components/Subheading"
import cocoa from '../src/assets/images/cocoa.webp'
import cashew from '../src/assets/images/cashew.webp'
import ginger from '../src/assets/images/ginger.webp'
import sesame from '../src/assets/images/sesame.webp'

const products = [
  {
    id: 1,
    name: 'Cocoa',
    image: cocoa,
  },
  {
    id: 2,
    name: 'Cashew',
    image: cashew,
  },
  {
    id: 3,
    name: 'Ginger',
    image: ginger,
  },
  {
    id: 4,
    name: 'Sesame',
    image: sesame,
  },

]

const Products = () => {
  return (
    <div id="our-products" className="bg-dimBackground py-20">
      <div className="w-11/12 mx-auto">
      <Subheading variant='secondary'>Our Products</Subheading>
      <h2 className="text-4xl font-bold font-serif my-4">From Farm to Global Markets</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-center place-items-end">
        {
      products.map((product)=>(
         <Product key={product.id} product={product}/>
      ))
    }
      </div>
      </div>
    </div>
    
    
  )
}

export default Products
