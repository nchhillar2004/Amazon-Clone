import React from 'react'
import './MainComp.css'
import Carousel from 'react-material-ui-carousel'

function Banner() {
    const data = [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71j8damPo5L._SX3000_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51Id5Jjpm-L._SX1500_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61CiqVTRBEL._SX3000_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Softlines_JWL_SH_GW_Assets/UNREC/11th-14th/Shoes/WithoutFDFO/Shoes_3000_one_monthly._CB571660453_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Beauty/GW/TBS/Skincare-PCdd._CB571612292_.jpg",
    ]
  return (
    <div className="banner">
        <Carousel
        className='carasousel'
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        height={250}
        navButtonsProps={{
            style:{
                backgroundColor:'transparent',
                color:'black',
                marginTop:-160,
                border:'2px solid black',
                borderRadius:'4px',
                height:'180px',
                width:'54px',
                
            }
        }}
        >
            {
                data.map((imag,i)=>{
                    return(
                        <>
                            <img src={imag} alt="" className='banner_img' width={1400}/>
                        </>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Banner