import React from "react";
import "./Card.css";
import Rating from '@mui/material/Rating';
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoneIcon from '@mui/icons-material/Done';

function Card({ category, title, imageSrc, rating, price, toggleCartItem, shoppingCartItems}) { // destructuring props
  const isItemInCart = shoppingCartItems[title];
  return (
    <div className="card">
      <div className="card__category">
        <h3>{category.toUpperCase()}</h3>
      </div>
      <div className="card__image">
        <img src={imageSrc} alt="Callum - King of the Div's" />
      </div>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__rating">
        <Rating name="half-rating" defaultValue={rating} precision={0.1} />
        <p>{rating}/5</p>
      </div>
      <div className="card__price">
        <p>£{price}</p>
      </div>
      <div className="card__button">
        <IconButton onClick={() => toggleCartItem(title)}>
          {isItemInCart ? (
            <DoneIcon className="card__button-icon added-to-cart" />
          ) : (
            <AddShoppingCartIcon className="card__button-icon" />
          )}
        </IconButton>
      </div>
    </div>
  );
}

export default Card;
