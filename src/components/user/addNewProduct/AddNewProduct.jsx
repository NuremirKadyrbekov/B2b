import React, { useState } from 'react';
import Css from './AddNewProduct.module.css';

const AddProduct = () => {
    const [product, setProduct] = useState({
        img: '',
        title: '',
        price: '',
        oldPrice: '',
        discount: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        // Отправка данных
    };

    return (
        <div className={Css.add_product_container}>
            <form className={Css.add_product_form} onSubmit={handleSubmit}>
                <h2 className={Css.add_title}>Добавить товар</h2>

                <input
                    type="text"
                    name="img"
                    placeholder="Ссылка на изображение"
                    value={product.img}
                    onChange={handleChange}
                    className={Css.add_input}
                />

                <input
                    type="text"
                    name="title"
                    placeholder="Название товара"
                    value={product.title}
                    onChange={handleChange}
                    className={Css.add_input}

                />

                <div className="add-prices">
                    <input
                        type="number"
                        name="price"
                        placeholder="Цена"
                        value={product.price}
                        onChange={handleChange}
                        className={Css.add_input}

                    />

                    <input
                        type="number"
                        name="oldPrice"
                        placeholder="Старая цена"
                        value={product.oldPrice}
                        onChange={handleChange}
                        className={Css.add_input}

                    />

                    <input
                        type="number"
                        name="discount"
                        placeholder="Скидка (%)"
                        value={product.discount}
                        onChange={handleChange}
                        className={Css.add_input}

                    />
                </div>

                <button type="submit" className={Css.add_button}>Добавить</button>
            </form>
        </div>
    );
};

export default AddProduct;
