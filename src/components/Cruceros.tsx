import { MintButton } from "./mintButton";

function Cruceros() {
  return (
    <form className="form">
      <div className="title">
        <h1>Cruises</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Nombre Pasajero">Destination</label>
          <input
            type="name"
            id="name_pas"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha">Departure date / Return Date</label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Departure Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="password">Port Departure</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Port Departure"
          />
        </div>
      </div>

      <div className="form-group text-start col-md-6 mb-4">
        <label>Guests</label>
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
          <label>Number of days</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="volvo">3-4 Days</option>
            <option value="saab">5-6 Days</option>
          </select>
        </div>
      </div>
      <MintButton text="Book" tokens={25} styleClass="btn_buy" />
    </form>
  );
}

export { Cruceros };
