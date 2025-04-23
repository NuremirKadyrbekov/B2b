import React from 'react';
import Css from './Profile.module.css';
import defaultAvatar from '../../assets/products/3.png'; // поставь свою заглушку

function Profile() {
  const user = {
    name: "Нурэмир",
    surname: "Кадырбеков",
    email: "nuremir@example.com",
    phone: "+996 700 123 456",
    address: "Кыргызстан, село Жергез",
    avatar: defaultAvatar
  };

  return (
    <div className={Css.profile_container}>
      <div className={Css.profile_card}>
        <div className={Css.avatar_block}>
          <img src={user.avatar} alt="Avatar" className={Css.avatar} />
          <button className={Css.upload_btn}>Изменить фото</button>
        </div>
        <h2 className={Css.profile_title}>Профиль</h2>
        <div className={Css.profile_item}><span>Имя:</span><p>{user.name}</p></div>
        <div className={Css.profile_item}><span>Фамилия:</span><p>{user.surname}</p></div>
        <div className={Css.profile_item}><span>Почта:</span><p>{user.email}</p></div>
        <div className={Css.profile_item}><span>Номер:</span><p>{user.phone}</p></div>
        <div className={Css.profile_item}><span>Адрес:</span><p>{user.address}</p></div>
      </div>
    </div>
  );
}

export default Profile;
