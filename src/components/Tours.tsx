import { MintButton } from "./mintButton";

function Tours() {
  return (
    <form className="form">
      <div className="title">
        <h1>Tours</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Destination" style={{color: "#A88043"}}>Destination</label>
          <input
            type="text"
            id="name_pas"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{color: "#A88043"}}>Departure Date</label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Departure Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label style={{color: "#A88043"}}>Departure</label>
          <input
            type="text"
            className="form-control"
            id="departureTour"
            placeholder="Departure"
          />
        </div>
      </div>
      
      <div className="form-group text-start col-md-6 mb-4">
        <label style={{color: "#A88043"}}>Number of Passengers</label>
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
          <label style={{color: "#A88043"}}>Confort / Superior</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="volvo">Confort</option>
            <option value="saab">Superior</option>
          </select>
        </div>
        <MintButton text="Book" tokens={20} styleClass="btn_buy" />
      </div>
    </form>
  );
}

export { Tours };
