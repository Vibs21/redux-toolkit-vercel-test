import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addProduct, removeProduct } from './store/productSlice';
import { useState } from 'react';

function App() {
  const productList = useSelector((state)=> state.product);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  
  const addProductOnState = () => {
    setCount( (state) => ++state)
    console.log('count', count);
    // const item = { id: 1, name: 'Product', price: 10 };
    // dispatch(addProduct(item));
    dispatch(addProduct({id:count, 'name': 'Some Name', 'desc': 'some'}))
  }

  return (
    <div className="App">
      <header className="App-header">
        productList: {productList.length}

        <button onClick={addProductOnState}>Add Product</button>

         {productList.map((item) => (
          <div key={item.id}>
            {item.id} | {item.name} <button onClick={()=> dispatch(removeProduct(item.id))}>Remove</button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
