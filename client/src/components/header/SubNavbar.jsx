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
        <BorderButton name="Amazon mini TV" href="/mini-tv"/>
        <BorderButton name="Sell" href="/sell"/>
        <BorderButton name="Best Sellers" href="/best-sellers"/>
        <BorderButton name="Today's Deals" href="/deals"/>
        <BorderButton name="Customer Service" href="/customer-service"/>
        <BorderButton name="Electronics" href="/electronics"/>
        <BorderButton name="Mobiles" href="/mobiles"/>
        <BorderButton name="Home/ Kitchen" href="/home-kitchen"/>
        <BorderButton name="Prime" href="/prime"/>
        <BorderButton name="Faishon" href="/faishon"/>
        <BorderButton name="Amazon Pay" href="/amazon-pay"/>
        <BorderButton name="Computers" href="/computers"/>
      </div>
    
    </div>
  )
}

export default SubNavbar