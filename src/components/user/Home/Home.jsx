// Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import Css from './Home.module.css';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import Slider from "react-slick";
import product1 from '../../assets/products/1.png';
import product2 from '../../assets/products/2.png';
import product3 from '../../assets/products/3.png';
import product4 from '../../assets/products/4.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const banners = [
        banner1,
        banner2,
        banner3
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const products = [
        { id: 1, img: product1, title: 'Гидрофильное масло', price: '591 ₽', oldPrice: '610 ₽', discount: 'ХОРОШАЯ ЦЕНА' },
        { id: 2, img: product2, title: 'Умный Будильник', price: '2 804 ₽', oldPrice: '3 261 ₽', discount: '-11%' },
        { id: 3, img: product3, title: 'Сыворотка для лица от прыщей и постакне с ниацинамидом', price: '425 ₽', oldPrice: '439 ₽', discount: '40–47 РАЗМЕРЫ' },
        { id: 4, img: product4, title: 'Кресло компьютерное игровое Optimum черный', price: '2 969 ₽', oldPrice: '3 810 ₽', discount: '-19%' },
        
    ];

    const AddProduct =(id) =>{
        let orders = JSON.parse(localStorage.getItem('products')) || []
        let productToAdd = products.find(p=> p.id === id)
        console.log(productToAdd)

        if(!productToAdd) return

        let updatedOrders = [...orders, productToAdd]
        localStorage.setItem('products', JSON.stringify(updatedOrders))
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 1500);
    }

    const [current, setCurrent] = useState(0);
    const length = banners.length;
    const timeoutRef = useRef(null);

    useEffect(() => {
        const next = () => setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
        timeoutRef.current = setInterval(next, 4000);
        return () => clearInterval(timeoutRef.current);
    }, [current, length]);





   

    return (
        <div className={Css.home_container}>
            {showSuccess && (
                <div className={Css.success_popup}>
                     Товар добавлен в корзину!
                </div>
            )}
            <div className={Css.slider}>
                {/* <div className={Css.slides} style={{ transform: `translateX(-${current * 100}%)` }}>
          {banners.map((src, idx) => (
            <div className={Css.slide} key={idx}>
              <img src={src} alt={`Banner ${idx}`} className={Css.slide_img} />
            </div>
          ))}
        </div>
        <div className={Css.dots}>
          {banners.map((_, idx) => (
            <span
              key={idx}
              className={idx === current ? `${Css.dot} ${Css.active_dot}` : Css.dot}
              onClick={() => { clearInterval(timeoutRef.current); setCurrent(idx); }}
            />
          ))}
        </div> */}
                <Slider {...settings}>
                   {banners.map((img, id)=>{
                        return (
                            <div key={id} className={Css.slide}>
                                <img src={img} alt={`Banner ${id}`} className={Css.slide_img} />
                            </div>
                        )
                   })}
                </Slider>
            </div>
            <div className={Css.products_grid}>
                {products.map(p => (
                    <div className={Css.product_card} key={p.id}>
                        <div className={Css.img_wrapper}>
                            <img src={p.img} alt={p.title} className={Css.product_img} />
                            <div className={Css.discount}>{p.discount}</div>
                            <div className={Css.heart}>♥</div>
                        </div>
                        <div className={Css.info}>
                            <h4 className={Css.title}>{p.title}</h4>
                            <div className={Css.prices}>
                                <span className={Css.new_price}>{p.price}</span>
                                <span className={Css.old_price}>{p.oldPrice}</span>
                            </div>
                        </div>
                        <button className={Css.product_button} onClick={()=>AddProduct(p.id)} > В Корзину</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

