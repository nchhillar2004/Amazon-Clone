import React from 'react'

function SpecificProduct(props) {
  return (
    <div className="specific_product">
        <div className="s_product_top">//spt - specific product top
            <div className="spt_left">//spt - specific product top - left
            <div className="product_images">
                <img src={props.image} alt={props.alt} />
            </div>
            </div>
            <div className="spt_right">//spt - specific product top - right
                
                </div>
        </div>
        <div className="s_product_bottom">
            <div className="spb_left">//spb - specific product bottom -left
                </div>
            <div className="spb_right">//spb - specific product bottom -right
                </div>
        </div>
    </div>
  )
}

export default SpecificProduct