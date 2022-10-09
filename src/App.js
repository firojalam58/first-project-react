
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/Main/Main';
import Shop from './Component/Shop/Shop'
import Inventory from './Component/Inventory/Inventory';
import About from './Component/About/About';
import Orders from './Component/Orders/Orders';
import { ProductsAndCartLoaders } from './Loaders/ProductsAndCartLoaders';

function App() {
  const router = createBrowserRouter([
    
    {
      
      path:'/',
      element:<Main></Main>,
      children:[
        {
        path:'shop',
        loader:ProductsAndCartLoaders,
        element:<Shop></Shop>
      },
      {
        path:'/inventory',element:<Inventory></Inventory>
      },
      {
        path:'/about',element:<About></About>
      },
      {
        path:'/orders',
        loader: ProductsAndCartLoaders,
        element:<Orders></Orders>,
        
      },
      {
        path:'*',element:<div><h2> !! Uffss This Page Not Found</h2></div>
      }
    ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
         
    </div>
  );
}

export default App;
