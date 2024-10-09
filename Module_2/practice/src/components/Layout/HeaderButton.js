import React from 'react'
import classes from './HeaderButton.module.css';
import ShoppingCart from '@mui/icons-material/ShoppingCart'

const HeaderButton = () => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <ShoppingCart/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>4</span>


    </button>
  )
}

export default HeaderButton