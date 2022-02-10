import { SettingsSystemDaydreamOutlined } from "@material-ui/icons";
import { useState } from "react";
import './ContactsPage.css'

const ContactsPage = () => {
    /*  const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [message, setMessage] = useState("");
  */
    /*  const handleSetName = (e) => {
         setName(e.target.value);
     };
 
     const handleSetEmail = (e) => {
         setEmail(e.target.value);
     };
 
     const handleSetPhone = (e) => {
         setPhone(e.target.value);
     };
 
     const handleSetMessage = (e) => {
         setMessage(e.target.value);
     };
 
     const handleSubmit = (e) => {
         e.preventDefault();
         const submitData = {
             name: name,
             email: email,
             phone: phone,
             message: message,
         };
     }
  */
    return (
        <h1>
            <div className='mainContacts'>
                <h2>Контакты</h2>

                <p>Адрес: " 98105, Феодосия. "</p>

                <p>Служебный тел.: " (06562) 3-00-32, 2-21-21 "</p>

                <p>Домашний тел.: " (06562) 4-04-54 "</p>

                <p>Мобильный тел.: " 066-958-70-48 "</p>

                <p>E-mail: " efimzaslavskiy38@mail.ru, akademfest@yandex.ru "</p>

                <b>Для связи с Заславским Ефимом Борисовичем заполните форму </b>
                {/* <b>обратной связи, расположенную ниже:</b> */}
            </div>
        </h1>
    )
}

{/*  <form className='contactsForm' onSubmit={handleSubmit}></form>
            <div>
                <input
                    className="contactsFormInput"
                    type="text"
                    placeholder="Ваше имя(Обязательно)"
                    onChange={handleSetName}
                    value={name}
                    required
                />
            </div>
            <div>
                <input
                    className="contactsFormInput"
                    type="text"
                    placeholder="Ваш E-mail(Обязательно)"
                    onChange={handleSetEmail}
                    value={email}
                    required
                />
            </div>
            <div>
                <input
                    className="contactsFormInput"
                    type="text"
                    placeholder="Ваш номер телефона(Обязательно)"
                    onChange={handleSetPhone}
                    value={phone}
                    required
                />
            </div>
            <div>
                <input
                    className="contactsFormInput"
                    type="text"
                    placeholder="Сообщение"
                    onChange={handleSetMessage}
                    value={message}
                    required
                />
            </div>
            <button className="blackBtn" type="submit">Отправить</button>

 */}




export default ContactsPage;