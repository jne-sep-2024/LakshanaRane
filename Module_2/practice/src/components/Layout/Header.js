import React from 'react'
import classes from'./Header.module.css'
import mainHeaderImage  from '../../assets/headerBanner.jpg'
import HeaderButton from './HeaderButton'

//  CSS file ko import karke classes naam ke object me store karna h
//  CSS class ka naam aise use karna hota hai, taki class ka name clash na ho aur yeh component-specific rahe.


const Header = () => {
  return (
    <div>
        <header className={classes.header}>
            <h1>Food Ordering App</h1>
            <HeaderButton/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mainHeaderImage} alt='main banner image'/>
        </div>
    </div>
  )
}

export default Header