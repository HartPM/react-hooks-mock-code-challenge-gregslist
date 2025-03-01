import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListings(data))
  },[]);

  function deleteAListing(e){
    fetch('http://localhost:6001/listings/${e.target.id}', 
    { method: 'DELETE' })
    .then(() => setListings(listings.filter(listing => {listing.id !== e.target.id})))
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} deleteAListing={deleteAListing} />
    </div>
  );
}

export default App;
