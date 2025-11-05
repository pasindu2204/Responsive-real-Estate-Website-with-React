import React from 'react'
import './Header.css';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import OutsideClickHandler from 'react-outside-click-handler';


const Header = () => {

  const [MenuOpened, setMenuOpened] = React.useState(false);
  const getMenuStyles = (MenuOpened) => {
    if(document.documentElement.clientWidth <= 800)
      {
        return {right: !MenuOpened && "-100%"};
  }
    return {};
};



  return (
  <>
   <section className='h-wrapper'>
     <div className='flexCenter paddings innerWidth h-container' >
      <img src='./logo.png' alt='logo' width={100}/>

     <OutsideClickHandler
  onOutsideClick={() => setMenuOpened(false)}
>

      <div className='flexCenter h-menu' style={getMenuStyles(MenuOpened)}>
        <a href='#' className='link'>Residencies</a>
        <a href='#' className='link'>Our Value</a>
        <a href='#' className='link'>Contact Us Us</a>
        <a href='#' className='link'>Get Started</a>
        <button className='button'>
             <a href='#'>Contact</a>
        </button>
      </div>

      </OutsideClickHandler>
      <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
        <HiOutlineMenuAlt3 size={30} />
      </div>
    </div>
    
    </section>
  </>
  )
}

export default Header
