import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {


  return (
    <header className={styles.mainHeader}>

      <NavLink to="/main" activeClassName={styles.activeLink}>Главная</NavLink>
      <NavLink to="/blog" activeClassName={styles.activeLink}>Блог</NavLink>



    </header>
  );
};
