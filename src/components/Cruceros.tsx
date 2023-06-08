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
            id="name_pas"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="Port" style={{color: "#A88043"}}>Port</label>
          <input
            type="name"
            id="name_pas"
            className="form-control"
            placeholder="Destination"
          />
        </div>
        <div className="form-group text-start col-md-6 mb-4">
          <label htmlFor="fecha" style={{color: "#A88043"}}>Arraval Date</label>
          <input
            type="datetime-local"
            id="date"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row text-start col-md-6 mb-4">
        <div className="form-group col-md-6 mb-4">
          <label style={{color: "#A88043"}}>Number of days</label>
          <select className="form-control" id="tipo" name="tipo">
            <option value="low">1-2 Days</option>
            <option value="media">3-4 Days</option>
            <option value="hard">5-6 Days</option>
          </select>
        </div>
      </div>
      <MintButton text="Book" tokens={25} styleClass="btn_buy" />
    </form>
  );
}

export { Cruceros };
