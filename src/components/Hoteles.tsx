import { MintButton } from "./mintButton";

function Hoteles() {
  return (
    <form className="form">
      <div className="title">
        <h1>Hotels</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Nombre Pasajero">Destination</label>
          <input
            type="text"
            id="name_destination"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha">Arraval Date </label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Arrival Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha">Leave Date </label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Leave Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="password">Rooms</label>
          <input
            type="text"
            className="form-control"
            id="rooms"
            placeholder="1"
          />
        </div>
      </div>
      <div className="form-group text-start w-25 mb-4">
        <label>Adults</label>
        <input
          type="number"
          min="1"
          max="20"
          className="form-control"
          id="inputAddress2"
        />
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label>Minors</label>
        <input
          type="number"
          min="1"
          max="20"
          className="form-control"
          id="inputAddress2"
        />
      </div>
      <div className="form-row text-start col-md-6 mb-4">
        <div className="form-group text-start col-md-6 mb-6">
          <label>Star rating</label>
          <select className="form-control text-start" id="tipo" name="tipo">
            <option value="volvo">5 Star</option>
            <option value="saab">4 Star</option>
            <option value="threeStar">3 Star</option>
            <option value="twoStar">2 Star</option>
          </select>
        </div>
      </div>
      <MintButton text="Book" tokens={20} styleClass="btn_buy" />
    </form>
  );
}

export { Hoteles };
