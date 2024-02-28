import Card from "./components/card/Card"
import datas from "./data/data"
import Header from "./components/header/Header"
import { request } from "./config/request"
import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    request.get('/products')
    .then(res => {
      setData(res.data)
      
    });
  }, []);
console.log(data);
console.log(datas);
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-4 gap-4 w-[80%]  mx-auto p-3">
        {data.map((product) => <Card key={product.id} {...product}/>)}
      </div>
    </div>
  )
}

export default App
