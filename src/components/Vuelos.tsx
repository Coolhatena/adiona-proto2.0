import { MintButton } from "./mintButton";

function Vuelos() {
  return (
    <form className="form">
      <div className="title">
        <h1>Flights</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Nombre Pasajero">Passanger Name</label>
          <input
            type="name"
            id="name_pas"
            className="form-control"
            placeholder="Pasanger Name"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha">Derparture Date / Return Date</label>
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
        <label>Arrival</label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Arrival"
        />
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label>Nomber of passsangers</label>
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
          <label>One Way / Round Trip</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="volvo">One Way</option>
            <option value="saab">Suoerior</option>
          </select>
        </div>
      </div>
      <MintButton text="Book" tokens={15} styleClass="btn_buy" />
    </form>
  );
}

export { Vuelos };
