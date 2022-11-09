import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'
import '../App.css'

const mainNav = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Hot",
    path: "/hot"
  },
  {
    display: "Video",
    path: "/video"
  },
  {
    display: "Contact",
    path: "/contact"
  }
]

const Header = () => {

  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex(e => e.path === pathname)

  const menuRef = useRef(null)
  const menuToggle = () => menuRef.current.classList.toggle('active')

  return (
    <Container>
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img src="https://wpocean.com/html/tf/bloggar/assets/images/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="menu">
                {
                    mainNav.map((item, index) => {
                        return(
                            <div key={index}>
                                <Link to={item.path} className={`item ${index === activeNav ? 'active' : ''}`}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="search">
                <BiSearch />
                <BiMenu />
            </div>
        </div>
       
    </Container>
    // <div className="header" ref={headerRef}>
    //   <div className="container">
    //     <div className="header__logo">
    //       <Link to="/">
    //         <img src={logo} alt="Logo"/>
    //       </Link>
    //     </div>
    //     <div className="header__menu">
    //       <div className="header__menu__mobile-toggle" onClick={menuToggle}>
    //         <i className='bx bx-menu-alt-left'></i>
    //       </div>
    //       <div className="header__menu__left" ref={menuRef}>
    //         <div className="header__menu__left__close" onClick={menuToggle}>
    //           <i className='bx bx-chevron-left'></i>
    //         </div>
    //         {
    //           mainNav.map((item,index)=> (
    //             <div 
    //               key={index} 
    //               className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
    //               onClick={menuToggle}
    //             >
    //               <Link to={item.path} >
    //                 <span >{item.display}</span>
    //               </Link>
    //             </div>
    //           ))
    //         }
    //       </div>
    //       <div className="header__menu__right">
    //         <div className="header__menu__item header__menu__right__item">
    //           <i className='bx bx-search'></i>
    //         </div>
    //         <div className="header__menu__item header__menu__right__item">
    //           <Link to="/cart">
    //             <i className='bx bx-shopping-bag'></i>
    //           </Link>
    //         </div>
    //         <div className="header__menu__item header__menu__right__item">
    //           <i className='bx bx-user'></i>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

const Container = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        z-index: 99;
    .logo {

    }
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item {
            margin: 0 2rem;
            color: var(--txt-main-color);
            font-size: 1.4rem;
        }
        .active {
            color: var(--main-color);
            font-weight: bold;
        }
    }
    .search {
        display: flex;
        z-index: 99;
        svg {
            font-size: 26px;
            font-weight: bold;
        }
        svg:nth-of-type(1) {
            margin-right: 12px;
        }
    }
    }
`

export default Header