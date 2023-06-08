import { MintButton } from "./mintButton";

function Cruceros() {
  return (
    <form className="form">
      <div className="title">
        <h1>Cruises</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Nombre Pasajero" style={{color: "#A88043"}}>Destination</label>
          <input
            type="text"
            id="name_destination"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{color: "#A88043"}}>Departure date </label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Departure Date"
          />
        </div>
       
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="text" style={{color: "#A88043"}}>Port Departure</label>
          <input
            type="text"
            className="form-control"
            id="port_departure"
            placeholder="Port Departure"
          />
        </div>
      </div>

      <div className="form-group text-start col-md-6 mb-4">
        <label style={{color: "#A88043"}}>Guests</label>
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
          <label style={{color: "#A88043"}}>Number of days</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="volvo">1-2 Days</option>
            <option value="volvo">3-4 Days</option>
            <option value="saab">5-6 Days</option>
          </select>
        </div>
        <MintButton text="Book" tokens={25} styleClass="btn_buy" />
      </div>
    </form>
  );
}

export { Cruceros };
