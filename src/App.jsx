import Card from "./components/card/Card"
import data from "./data/data"
import ProductsContainer from "./components/store-productss/ProductsContainer"
import Header from "./components/header/Header"


function App() {


  return (
    <div>
      <Header/>
      {/* <ProductsContainer/> */}
      <div className="grid grid-cols-4 gap-4 w-[80%]  mx-auto p-3">
        {data.map((product) => <Card key={product.id} {...product}/>)}
      </div>
    </div>
  )
}

export default App
