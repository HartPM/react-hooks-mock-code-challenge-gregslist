import React, {useState} from "react";

function ListingCard({id, description, image, location, handleDelete}) {

  function handleDeleteClick(e){
    handleDelete(e)
  }

  return(
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" id={id} onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  )}

export default ListingCard;
