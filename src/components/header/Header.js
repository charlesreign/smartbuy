import {useState} from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import {FaCartShopping} from 'react-icons/fa6'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        smart<span>Buy</span>
      </h2>
    </Link>
  </div>
)

const cart = (
  <span className={styles.cart}>
    <Link to='/cart'>
      Cart
      <FaCartShopping size={20}/>
      <p>{0}</p>
      </Link>
  </span>
)



const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }


  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}>
          <div className={showMenu ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}` : `${'nav-wrapper'}`} onClick={hideMenu}></div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              <Link to="/">
                {logo}
              </Link>
              <FaTimes size={22} color='#fff' onClick={hideMenu}/>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register </Link>
              <Link to='/order-history'>My Orders</Link>
            </span>
            {cart}
          </div>
        </nav>
        
        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
  )
}

export default Header
