import React from 'react'
import './navbar.css'
import BorderButton from '../common/BorderButton';
import IconBorderButton from '../common/IconBorderButton'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function SubNavbar() {
  return (
    <div className="sub-navbar">
      <div className="sub-left">
        <IconBorderButton icon={<MenuOutlinedIcon/>} name="All" />
        </div>
      <div className="sub-right">
        <BorderButton name="Amazon mini TV" href="/"/>
        <BorderButton name="Sell" href="/"/>
        <BorderButton name="Best Sellers" href="/"/>
        <BorderButton name="Today's Deals" href="/"/>
        <BorderButton name="Customer Serivice" href="/"/>
        <BorderButton name="Electronics" href="/"/>
        <BorderButton name="Mobiles" href="/"/>
        <BorderButton name="Home/ Kitchen" href="/"/>
        <BorderButton name="Prime" href="/"/>
        <BorderButton name="Faishon" href="/"/>
        <BorderButton name="Amazon Pay" href="/"/>
        <BorderButton name="Computers" href="/"/>
      </div>
    
    </div>
  )
}

export default SubNavbar