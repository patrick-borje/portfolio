import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";
import "../css/picArt.css";
import { Link } from "react-router-dom";

function Photos() {
  const { allPhotos, cartItems } = useContext(Context);
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";
  return (
    <div>
      <div className="photo-header">
        <h1 className="photo-title">Gallery</h1>
        <Link className="logo-link" to="/Cart">
          <div className="btn-cart">
            <h1>Cart</h1>
            <i className={`${cartClassName} ri-fw ri-2x`}></i>
          </div>
        </Link>
      </div>

      <main className="photos">{imageElements}</main>
    </div>
  );
}

export default Photos;
