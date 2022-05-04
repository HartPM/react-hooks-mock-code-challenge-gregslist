import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteAListing}) {

  let displayListings = listings.map((listing) => {
    return (
    <ListingCard handleDelete={handleDelete} id={listing.id} key={listing.id} description={listing.description} image={listing.image} location={listing.location} />
    )}
  );

  function handleDelete(e){
    deleteAListing(e)
  }

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
