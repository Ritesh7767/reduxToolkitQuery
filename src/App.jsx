import { useState, useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import fetchData from './redux/createAsyncThunk'
import { useDataQuery, usePostProductMutation, useProductsQuery } from './services/productApi'

const AddProduct = () => {

  const [postProduct] = usePostProductMutation()
  
  console.log("this is appProduct")
  const product = {
    "id": 3,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
  }

  const handleClick = async () => {

    await postProduct(JSON.stringify(product))
  }

  return (
    <button onClick={handleClick}>Add Product</button>
  )
}

function App() {

  const {data, error, isLoading, isFetching, isSuccess} = useProductsQuery()

  console.log("app")
  return (
    <>
      <h1>Hello world</h1>
      {isLoading && <h2>Loading</h2> }
      {isFetching && <h2>...Fetching</h2> }
      {error && <h2>Something went wrong</h2> }
      {isSuccess && <h2>Success</h2> }
      <div key={'ritesh'}>
        {data?.map((ele, i) => {
          return (
            <>
            <div key={i}>{JSON.stringify(ele)}</div><br />
            </>
          )
        })}
      </div>
      <AddProduct/>
    </>
  )
}

export default App
