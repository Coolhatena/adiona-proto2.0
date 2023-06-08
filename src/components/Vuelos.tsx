import { MintButton } from "./mintButton";

function Vuelos() {
  return (
    <form className="form">
      <div className="title">
        <h1>Flights</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Nombre Pasajero" style={{color: "#A88043"}}>Passanger Name</label>
          <input
            type="text"
            id="name_pas"
            className="form-control"
            placeholder="Pasanger Name"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{color: "#A88043"}}>Derparture Date </label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Departure Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{color: "#A88043"}}>Return Date </label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Return Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label style={{color: "#A88043"}}>Departure</label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Departure"
          />
        </div>
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label style={{color: "#A88043"}}>Arrival</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Arrival"
        />
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label style={{color: "#A88043"}}>Number of passangers</label>
        <input
          type="number"
          min="1"
          max="20"
          className="form-control"
          id="inputAddress2"
        />
      </div>
      <div className="form-row text-start col-md-6 mb-4">
        <div className="form-group col-md-6 mb-4">
          <label style={{color: "#A88043"}}>One Way / Round Trip</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="volvo">One Way</option>
            <option value="saab">Round Trip</option>
          </select>
        </div>
        <MintButton text="Book" tokens={15} styleClass="btn_buy" />
      </div>
    </form>
  );
}

export { Vuelos };
