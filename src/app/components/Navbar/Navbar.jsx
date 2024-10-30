import { CgClose } from 'react-icons/cg';

import styles from './Navbar.module.css';
import { NAV_LIST } from '../../data/data';
import Link from 'next/link';

export const Navbar = ({ show, onClose }) => {
  const navClasses = `${styles.menu} ${show ? styles['show-menu'] : ''}`;

  return (
    <div className={navClasses}>
      <ul className={`${styles.list} grid`}>
        {NAV_LIST.map((navItem, idx) => (
          <li key={idx}>
            <Link
              href={`#${navItem.name.toLowerCase().replaceAll(' ', '')}`}
              className={styles.navLink}
              onClick={onClose}
            >
              <navItem.Icon className={styles.icon} />
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
      <button aria-label="close menu" onClick={onClose} className={styles.btn}>
        <CgClose className={styles['close-icon']} />
      </button>
    </div>
  );
};
