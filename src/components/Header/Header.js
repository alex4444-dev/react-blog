import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName, setIsAdmin }) => {

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setIsAdmin(false);
  }


  return (
    <header className={styles.mainHeader}>
      <div className={styles.navbar}>
        <NavLink to="/main" activeClassName={styles.activeLink}>Главная</NavLink>
        <NavLink to="/blog" activeClassName={styles.activeLink}>Блог</NavLink>
        <NavLink to="/contacts" activeClassName={styles.activeLink}>Контакты</NavLink>
      </div>

      {
        isLoggedIn ?
          <nav>
            &nbsp;<strong>{userName}</strong>
            <NavLink
              onClick={handleLogOut}
              exact
              to="/login"
            >
              <MeetingRoomIcon />
              Выход
            </NavLink>
          </nav>
          :
          <nav>
            Добро пожаловать!
          </nav>
      }

    </header>

  );
};
