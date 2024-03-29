import { Redirect } from "react-router";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';


export const LoginPage = ({ setIsLoggedIn, setUserName, setIsAdmin }) => {
  const history = useHistory()

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogIn = (e) => {
    e.preventDefault();

    if (login === 'admin') {
      if (password === 'admin-aleksey-0406') setIsAdmin(true);
      else {
        return false
      }
    }else if (login === ''){
      if (password === '') {
      alert("Заполните все поля!"); 
      return <Redirect to="/login"/>;
       } else {
          return false
        }
      }

    setUserName(login);
    setIsLoggedIn(true);
    history.push('/');

    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userName', login);
  }

  return (
    <h1>
      <form className="loginForm">
        <h2>Авторизация</h2>
        <div>
          <input
            className="loginFormInput"
            type="text"
            placeholder="Логин"
            onChange={handleLoginChange}
            value={login}
            required
          />
        </div>
        <div>
          <input
            className="loginFormInput"
            type="password"
            placeholder="Пароль"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        <div>
          <button className="blackBtn" onClick={handleLogIn}>
            Войти
          </button>
        </div>
      </form>
    </h1>
  );
};