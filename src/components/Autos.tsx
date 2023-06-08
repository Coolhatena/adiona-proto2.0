import { MintButton } from "./mintButton";

function Autos() {
  return (
    <form className="form">
      <div className="title">
        <h1>Car Rental</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Destination" style={{color: "#A88043"}}>Destination</label>
          <input
            type="text"
            id="name_destination"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{color: "#A88043"}}>Derparture Date / Return Date</label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Fecha Salida"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="text" style={{color: "#A88043"}}>Pick up</label>
          <input
            type="text"
            className="form-control"
            id="pickup"
            placeholder="Pick Up "
          />
        </div>
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label style={{color: "#A88043"}}>Drop off</label>
        <input
          type="text"
          className="form-control"
          id="dropoff"
          placeholder="Drop Off"
        />
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label style={{color: "#A88043"}}>Num. of passengers</label>
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
          <label style={{color: "#A88043"}}>One Way / Round Ttip</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="volvo">Once Way</option>
            <option value="saab">Round Trip</option>
          </select>
        </div>
        <MintButton text="Book" tokens={10} styleClass="btn_buy" />
      </div>
    </form>
  );
}

export { Autos };
