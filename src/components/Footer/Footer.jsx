import styles from './Footer.module.css';
import {
  AiOutlineGithub as GitHubIcon,
  AiFillLinkedin as LinkedinIcon,
  AiOutlineMail as MailIcon,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <header>
        <h3>Created by Ana Carolina Mendes</h3>
      </header>
      
      <address>
        <a className={styles.iconLink} href="https://github.com/AnaCarolina86">
          <GitHubIcon 
            size={24}
          />
        </a>
        <a className={styles.iconLink} href="https://www.linkedin.com/in/ana-carolina-coelho-mendes/">
          <LinkedinIcon
            size={24}
          /> 
        </a>
        <a className={styles.iconLink} href="mailto:anaccm86@gmail.com">
          <MailIcon
            size={24}
          />
        </a>
      </address>      
    </footer>
  )
}
