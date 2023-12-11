import React, { useEffect, useState } from "react";
import "./GetProductOne.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";

function GetProductOne() {
    const { id } = useParams("");

    const [IndividualData, setIndividualData] = useState([]);

    const getIndividualData = async () => {
        const res = await fetch(`http://localhost:8080/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();

        if (res.status !== 201) {
            console.log("no data available");
        } else {
            console.log("get data");
            setIndividualData(data);
        }
    };

    useEffect(() => {
        getIndividualData();
    }, [id]);

    return (
        <div className="get_product_one">
            {IndividualData && Object.keys(IndividualData).length && (
                <div className="get_products_section">
                    <div className="left_product">
                        <div className="image_container">
                            <img
                                src={IndividualData.url}
                                alt={IndividualData.description}
                                height={400}
                            />
                        </div>
                        <Divider className="divider" />
                        <div className="seller_description">
                            <p>{IndividualData.description}</p>
                        </div>
                    </div>
                    <div className="right_product">
                        <div className="right_card">
                            <h1>{IndividualData.title.longTitle}</h1>
                            <div className="get_product_price">
                                <div className="get_flex">
                                    <span className="discount">
                                        {IndividualData.price.discount}
                                    </span>
                                    <sup>₹</sup>
                                    <h2>{IndividualData.price.cost}</h2>
                                </div>
                                <div className="get_flex grey">
                                    <span>M.R.P.: </span>
                                    <p className="mrp">
                                        {IndividualData.price.mrp}
                                    </p>
                                </div>
                            </div>
                            <div className="offers">
                                FREE delivery if ordered in 2 days.
                            </div>
                            <p className="in_stock">In stock</p>
                            <div className="buttons">
                                <a className="add_to_cart">Add to cart</a>
                                <a className="buy_now">Buy now</a>
                            </div>
                            <b>Special offer: {IndividualData.discount}</b>
                            <Divider className="divider" />
                            <div className="product_description">
                                <b>About this item</b>
                                <ul>
                                    <li>{IndividualData.about.feature1}</li>
                                    <li>{IndividualData.about.feature2}</li>
                                    <li>{IndividualData.about.feature3}</li>
                                    <li>{IndividualData.about.feature4}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GetProductOne;
