export default function Details() {
  const buttonItems = [
    "Restuarant",
    "Supermarket",
    "Textiles",
    "Footware",
    "Pharmacy",
    "Stationary",
    "View all",
  ];
  return <div className="container" id="details-page">
    <div className="row">
      <div className="col">
        <h1>Discover Business in TVM</h1>
        <p>List Shops Products in Your Area</p>
      </div>

      <div className="row m-5 ">
        <div className="col">
          <select className="m-5 p-2">
            <option>All</option>
            <option>Shops</option>
            <option>Services</option>
            <option>Products</option>
            <option>Offers</option>
            <option>Homemade and Organic</option>
          </select>
          <input
            type="search"
            placeholder="Search for Shops,Products,Services and Offers "
            className="m-5 p-3 w-50"
          ></input>
          <button className="m-5 p-2">O</button>
        </div>
      </div>
    </div>
    <div className="row">
        {buttonItems.map((names,i)=>{
return <button className="col p-2 m-3 btn btn-success">{names}

</button>
        })}
    </div>
  </div>;
  
  
}
