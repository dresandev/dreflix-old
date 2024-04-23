import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Developed by &nbsp;
        <a
          className={styles.dresanWebLink}
          href='https://www.dresan.is-a.dev/'
          target='_blank'
        >
          Dresan
        </a>
      </p>
    </footer>
  )
}
