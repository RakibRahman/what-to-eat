import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useGetProducts } from './apiOperations';
import './App.css';
import { CardContainer } from './components/CardContainer/CardContainer';
import { Cart } from './components/Cart/Cart';
import { cartProducts } from './slices/cartSlice';


function App() {

  const { data, isError, isSuccess } = useGetProducts();

  const cartProductsInfo = useSelector(cartProducts)
  console.log(cartProductsInfo);
  return (
    <div className="App">
      <button>{cartProductsInfo.length}</button>
      <CardContainer productList={data!} />
      <Cart />
      <Toaster />
    </div>
  )
}

export default App
