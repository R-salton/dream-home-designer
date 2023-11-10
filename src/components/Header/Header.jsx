import React, { useEffect, useRef } from 'react'
import './Header.scss';
import { nav__links } from '../../data';

function Header({theme,toggleTheme}) {

 const headerRef = useRef(null);
 const menuRef = useRef(null);

 const headerFunc = ()=>{
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    headerRef.current?.classList.add('header__shrink')
  } else{
    headerRef.current?.classList.remove('header__shrink');
  }
 }
 
 useEffect(()=>{
  window.addEventListener('scroll', headerFunc);
  return ()=> window.removeEventListener('scroll', headerFunc);
 },[])

 const handleClick = e =>{
  e.preventDefault();

  const targetAttr = e.target.getAttribute('href');

  const location = document.querySelector(targetAttr)?.offsetTop;
  console.log(location);

  window.scrollTo({
    left: 0,
    top: location -80,
  })
 }

 const toggleMenu = ()=>{
  menuRef.current.classList.toggle('menu__active')
 }

  return (
    <header className='header' ref={headerRef}>
     <div className='container'>
      <div className='nav__wrapper'>
        <div className='logo'>
          <h2>DreamH</h2>
        </div>

        {/* ========== Navigation =============*/}
        <div className='navigation' ref={menuRef} onClick={toggleMenu}>
          <ul className="menu">
          {
            nav__links.map((nav,index) =>{

              return(
                  <li className='menu__item' key={index}>
                    <a href={`${nav.path}`} onClick={handleClick} className='menu__link'>{nav.display}</a>
                  </li>
              )
            })
          }

          </ul>
        </div>

        {/* ============= Light Mode ================= */}
        <div className='light__mode'>
          <span onClick={toggleTheme}>
          {
            theme === 'dark-theme' ? (<span><i class="ri-sun-line"></i>Light</span>) : (<span>{}<i class="ri-moon-line"></i>Dark</span>)
          }
          
          </span> 
        </div>

          <span className='mobile__menu' onClick={toggleMenu}><i class="ri-menu-4-fill"></i></span>
      </div>

     </div>
    </header>
  )
}

export default Header