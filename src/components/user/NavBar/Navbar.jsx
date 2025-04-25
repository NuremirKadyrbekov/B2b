import React, { useState } from 'react';
import Css from './Navbar.module.css';
import { FaBoxOpen, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={Css.navbar}>
                <div className={Css.navbar_container}>
                    <div className={Css.logo}>
                        <h1>My<span>Market</span></h1>
                    </div>
                    <div className={Css.search_block}>
                        <input type="text" placeholder="Поиск товаров..." />
                    </div>
                    <div className={Css.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className={`${Css.navbar_links} ${menuOpen ? Css.active : ''}`}>
                        <Link to='/' onClick={() => setMenuOpen(false)}>
                            <IoHome className={Css.icon} />
                            <span>Главная</span>
                        </Link>
                        <Link to='del' onClick={() => setMenuOpen(false)}>
                            <FaBoxOpen className={Css.icon} />
                            <span>Доставка</span>
                        </Link>
                        <Link to='cart' onClick={() => setMenuOpen(false)}>
                            <FaShoppingCart className={Css.icon} />
                            <span>Корзина</span>
                        </Link>
                        <Link to='/profile'onClick={() => setMenuOpen(false)}  >
                            <FaUser className={Css.icon} />
                            <span>Профиль</span>
                        </Link>
                    </div>
            {menuOpen && <div className={Css.overlay} onClick={() => setMenuOpen(false)} />}

                </div>
            </div>
        </>
    );
}

export default Navbar;
