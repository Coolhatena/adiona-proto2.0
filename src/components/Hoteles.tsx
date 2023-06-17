import { MintButton } from "./mintButton";

function Hoteles() {
  return (
    <form className="form">
      <div className="title">
        <h1>Hotels</h1>
      </div>
      <div className="form-row">
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Nombre Pasajero" style={{ color: "#A88043" }}>
            Destination
          </label>
          <input
            type="text"
            id="name_destination"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{ color: "#A88043" }}>
            Arraval Date{" "}
          </label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Arrival Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{ color: "#A88043" }}>
            Leave Date{" "}
          </label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
            placeholder="Leave Date"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="number" style={{ color: "#A88043" }}>
            Rooms
          </label>
          <input type="number" min="1" max="20" className="form-control" />
        </div>
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label htmlFor="number" style={{ color: "#A88043" }}>
          Minors
        </label>
        <input type="number" min="1" max="20" className="form-control" />
      </div>
      <div className="form-group text-start col-md-6 mb-4">
        <label htmlFor="number" style={{ color: "#A88043" }}>
          Adults
        </label>
        <input type="number" min="1" max="20" className="form-control" />
      </div>
      <div className="form-row text-start col-md-6 mb-4">
        <div className="form-group text-start col-md-6 mb-6 pb-4">
          <label style={{ color: "#A88043" }}>Star rating</label>
          <select className="form-control text-start" id="tipo" name="tipo">
            <option value="volvo">5 Star</option>
            <option value="saab">4 Star</option>
            <option value="threeStar">3 Star</option>
            <option value="twoStar">2 Star</option>
          </select>
        </div>
        <MintButton text="Book" tokens={20} styleClass="btn_buy" />
      </div>
    </form>
  );
}

export { Hoteles };
