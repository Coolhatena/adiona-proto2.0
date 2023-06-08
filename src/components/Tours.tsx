import { MintButton } from "./mintButton";

function Tours() {
  return (
    <form className="form">
      <div className="title">
        <h1>Tours</h1>
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
          <label htmlFor="fecha">Departure Date</label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Departure Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="password">Departure</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Departure"
          />
        </div>
      </div>
      
      <div className="form-group text-start col-md-6 mb-4">
        <label>Number of Passenger</label>
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
          <label>Confort / Superior</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="volvo">Confort</option>
            <option value="saab">Superior</option>
          </select>
        </div>
      </div>
      <MintButton text="Book" tokens={20} styleClass="btn_buy" />
    </form>
  );
}

export { Tours };
