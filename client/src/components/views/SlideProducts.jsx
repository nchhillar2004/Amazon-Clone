import React from "react";
import { Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "./ProductViews.css";
// import { products } from "../../data/ProductsData";
import "react-multi-carousel/lib/styles.css";

function SlideProducts({title, href, products}) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
    };


    return (
        <div className="slide_products">
            <div className="slide_container">
                <div className="slide_title">
                    <h2>{title}</h2>
                    <a href={href}>See all products</a>
                </div>
                <Divider />
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    draggable={false}
                    swipeable={true}
                    showDots={false}
                    centerMode={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container"
                >
                    {products.map((e) => {
                        return (
                            <div className="product">
                                <div className="products_item">
                                    <div className="product_image">
                                        <img src={e.url} alt={e.description} />
                                    </div>
                                    <div className="product_description">
                                        <a href={`/getproductsone/${e.id}`}>{e.title.longTitle}</a>
                                        <div className="product_price">
                                            <span>
                                                <sup>&#8377;</sup>
                                                {e.price.cost}.00
                                            </span>
                                            <p>&#8377;{e.price.mrp}</p>
                                        </div>
                                        <p className="tagline">{e.tagline}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default SlideProducts;
