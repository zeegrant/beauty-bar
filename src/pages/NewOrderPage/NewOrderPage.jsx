import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import BarList from '../../components/BarList/BarList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [barItems, setBarItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  // Obtain a ref object
  const categoriesRef = useRef([]);

  const navigate = useNavigate();
  console.log(cart)
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat]
      }, []);
      setActiveCat(categoriesRef.current[1]);
      setBarItems(items);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // the empty dependency array above will result in 
  // the function running after the FIRST render
  // only

/*--- Event Handlers --- */
async function handleAddToOrder(itemId) {
  const cart = await ordersAPI.addItemToCart(itemId)
  setCart(cart)
}

async function handleChangeQty(itemId, newQty) {
  const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
  setCart(updatedCart);
}

async function handleCheckout() {
  await ordersAPI.checkout();
  navigate('/orders');
}

  return (
    <main className="NewOrderPage">
      <aside>
        {/* <Logo /> */}
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <BarList
        barItems={barItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail 
      order={cart} 
      handleChangeQty={handleChangeQty} 
      handleCheckout={handleCheckout} 
      />
    </main>
  );
}