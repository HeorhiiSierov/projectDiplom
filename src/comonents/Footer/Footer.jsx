import styles from "./footer.module.css";
import instagram from "../../assest/img/inst.svg";
import whatsapp from "../../assest/img/whatsapp.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.text_contact}>Contact</h2>
      <div className={styles.social_elements}>
        <div className={styles.number_phone}>
          <p className={styles.p_phone}>Phone</p>
          <a href="tel:+49 999 999 99 99" className={styles.p_number}>
            +49 999 999 99 99
          </a>
        </div>
        <div className={styles.sotial_img}>
          <p className={styles.p_social}>Socials</p>
          <div className={styles.img_footer}>
            <a target="blank" href="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://web.whatsapp.com/" target="blank">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer_adress}>
        <div className={styles.adress}>
          <p className={styles.p_adress}>Address</p>
          <a
            target="blank"
            href="https://www.google.com/maps/search/Linkstra%C3%9Fe+2,+8+OG,+10+785,+Berlin,+Deutschland/@52.5079236,13.3725205,17z/data=!3m1!4b1?entry=ttu"
            className={styles.p_adress_berlin}
          >
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </a>
        </div>
        <div className={styles.working}>
          <p className={styles.p_working}>Working Hours</p>
          <p className={styles.p_hours}>24 hours a day</p>
        </div>
      </div>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1690373306128!5m2!1sru!2sde"
        title="myFrame"
        loading="lazy"
      ></iframe>
    </footer>
  );
}

export default Footer;
