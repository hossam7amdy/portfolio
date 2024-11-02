import { CgClose } from 'react-icons/cg';

import styles from './Navbar.module.css';
import { NAV_LIST } from '../../data/data';
import Link from 'next/link';
import { useActiveSection } from '../../hooks/useActiveSection';

export const Navbar = ({ show, onClose }) => {
  const activeSection = useActiveSection(
    NAV_LIST.map(({ name }) => name.toLowerCase().replaceAll(' ', ''))
  );
  const navClasses = `${styles.menu} ${show ? styles['show-menu'] : ''}`;

  return (
    <div className={navClasses}>
      <ul className={`${styles.list} grid`}>
        {NAV_LIST.map(({ name, Icon }) => (
          <li key={name}>
            <Link
              href={`#${name.toLowerCase().replaceAll(' ', '')}`}
              className={
                styles.navLink +
                (activeSection === name.toLowerCase().replaceAll(' ', '')
                  ? ` ${styles.navLinkActive}`
                  : '')
              }
              onClick={onClose}
            >
              <Icon className={styles.icon} />
              {name}
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
