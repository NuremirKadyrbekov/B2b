import React, { useEffect, useState } from 'react';
import Css from './Cart.module.css';
import CheckOutButton from '../../../UI/Buttons/CheckOutButtons';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('products')) || [];
    const grouped = groupById(data);
    setProducts(grouped);
  }, []);

  const groupById = (items) => {
    const map = {};
    items.forEach(item => {
      if (map[item.id]) {
        map[item.id].count += 1;
      } else {
        map[item.id] = { ...item, count: 1 };
      }
    });
    return Object.values(map);
  };

  const updateLocalStorage = (updatedProducts) => {
    const flatList = updatedProducts.flatMap(p =>
      Array(p.count).fill({ ...p, count: 1 }) // сохранить как массив товаров
    );
    localStorage.setItem('products', JSON.stringify(flatList));
  };

  const increaseCount = (id) => {
    const updated = products.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    );
    setProducts(updated);
    updateLocalStorage(updated);
  };

  const decreaseCount = (id) => {
    const updated = products
      .map(p => p.id === id ? { ...p, count: p.count - 1 } : p)
      .filter(p => p.count > 0);
    setProducts(updated);
    updateLocalStorage(updated);
  };

  const removeFromCart = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    updateLocalStorage(updated);
  };

  const totalPrice = products.reduce((sum, p) => {
    const price = parseInt(p.price.replace(/\D/g, ''), 10);
    return sum + price * p.count;
  }, 0);

  return (
    <div className={Css.order}>
      <h2 className={Css.heading}>Корзина</h2>
      {products.length === 0 ? (
        <p className={Css.empty}>Корзина пуста</p>
      ) : (
        <div className={Css.product_list}>
          {products.map((p) => (
            <div className={Css.product_card} key={p.id}>
              <img src={p.img} alt={p.title} className={Css.product_img} />
              <div className={Css.product_info}>
                <h4>{p.title}</h4>
                <div className={Css.prices}>
                  <span className={Css.new_price}>{p.price}</span>
                  <span className={Css.old_price}>{p.oldPrice}</span>
                </div>
                <div className={Css.buttons_block}>
                  <span className={Css.discount}>{p.discount}</span>
                  <div className={Css.counter}>
                    <button onClick={() => decreaseCount(p.id)}>-</button>
                    <span>{p.count}</span>
                    <button onClick={() => increaseCount(p.id)}>+</button>
                  </div>
                  <button className={Css.remove} onClick={() => removeFromCart(p.id)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className={Css.total}>
            <div>
              <span>Итого:</span>
              <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>

            </div>
            <div className={Css.checkout}>
              <CheckOutButton/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
