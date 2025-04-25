// Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import Css from './Home.module.css';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import Slider from "react-slick";

import product5 from '../../assets/products/cola.png';
import product6 from '../../assets/products/fanta.png';
import product7 from '../../assets/products/dirol.png';
import product8 from '../../assets/products/orbit.png';
import product9 from '../../assets/products/lays.png';
import product10 from '../../assets/products/prin.png';
import product11 from '../../assets/products/xrus.png';
import product12 from '../../assets/products/12.png';
import product13 from '../../assets/products/13.png';
import product14 from '../../assets/products/14.png';
import product15 from '../../assets/products/15.png';
import product16 from '../../assets/products/16.png';














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
        { id: 1, img: product5, title: 'Coca cola', price: '100 сом', oldPrice: '140 сом', discount: '1 литр' },
        { id: 2, img: product6, title: 'Фанта', price: '90 сом', oldPrice: '120 сом', discount: '1 литр' },
        { id: 3, img: product7, title: 'Дирол жевательная резина', price: '30 сом', oldPrice: '50 сом', discount: 'пачка' },
        { id: 4, img: product8, title: 'Жевательная резинка Орбит Orbit', price: '30 сом', oldPrice: '45 сом', discount: 'пачка' },
        { id: 5, img: product9, title: 'Чипсы Lays', price: '80 сом', oldPrice: '120 сом', discount: '120 грамм' },
        { id: 6, img: product10, title: 'Чипсы Принглс', price: '120 сом', oldPrice: '140 сом', discount: '100 грамм' },
        { id: 7, img: product11, title: 'Сухарики Хрусteam Королевский краб', price: '31 сом', oldPrice: '50 сом', discount: '60 грамм' },
        { id: 8, img: product12, title: 'Сырок творожный Чудо ванильный', price: '35 сом', oldPrice: '50 сом', discount: '40 грамм' },
        { id: 9, img: product13, title: 'Газированная вода Легенда', price: '35 сом', oldPrice: '45 сом', discount: '1 литр' },
        { id: 10, img: product14, title: 'Чипсы Пир', price: '100 сом', oldPrice: '120 сом', discount: '100 грамм' },
        { id: 11, img: product15, title: 'Энергетик Flash', price: '100 сом', oldPrice: '120 сом', discount: '450 мл' },
        { id: 12, img: product16, title: 'Мыло Роса', price: '80 сом', oldPrice: '120 сом', discount: '250 грамм' },
        
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

