import sytles from './Header.module.css';

export default function Header({ children, size }) {
  

  return (
    <header className={sytles.header}>
      <nav>
        <h1 className={sytles.headerTitle} >{children}</h1>
      </nav>      
    </header>
  );
}
