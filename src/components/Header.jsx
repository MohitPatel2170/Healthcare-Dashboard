// Navbar.jsx
import Profile from '../assets/userprofile2.png';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        
        {/* Section 1: Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <span className={styles.healthText}>Health</span>
            <span className={styles.careText}>care.</span>
          </div>
        </div>

        {/* Section 2: Search Bar */}
        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIconWrapper}>
              <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
          </div>

         <button className={styles.notificationBtn}>
            <svg className={styles.notificationIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        {/* Section 3: Right Icons */}
        <div className={styles.rightSectionContainer}>

        <div className={styles.rightSection}>
       

          {/* Profile */}
          <div className={styles.profileWrapper}>
            <img 
              src={Profile}
              alt="Profile" 
              className={styles.profileImage}
            />
          </div>

          {/* Add Button */}
          <button className={styles.addBtn}>
            <svg className={styles.addIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;