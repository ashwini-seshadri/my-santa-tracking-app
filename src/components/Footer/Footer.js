import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy; <a href="">Next.js Leaflet Santa Tracker</a>, {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
