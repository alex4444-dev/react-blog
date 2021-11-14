import styles from "./Footer.module.css";

export const Footer = ({ year }) => {
  return (
    <footer>
      <span>©Блог Ефима Борисовича Заславского - {year}</span>
    </footer>
  );
};
