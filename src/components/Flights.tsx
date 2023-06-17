import { useNavigate } from "react-router-dom";
import { MintButton } from "./mintButton";

function Flights() {
    const navigate = useNavigate();
    return (
        <div className="flight">
            <div className="vuelo d-inline">
                <video className="vuelo contrast-100" autoPlay muted controls>
                    <source src="vuelo.mp4" type="video/mp4" />
                </video>
            </div>

                <div className="container_vuelo d-inline">
                    <h1>Get ready to take off!</h1>
                    <a href="#data" className="btn_reserva mt-2" type="submit">
                        Get Started
                    </a>
                </div>

            <div className="form_vuelo d-inline">
                <form className="form" id="data">
                    <div className="title">
                        <h1>Flights</h1>
                    </div>
                    <div className="form-row">
                        <div className="form-group text-start col-md-10 mb-4">
                            <label htmlFor="Nombre Pasajero" style={{ color: "#A88043" }}>Passanger Name</label>
                            <input
                                type="text"
                                id="name_pas"
                                className="form-control"
                                placeholder="Pasanger Name"
                            />
                        </div>
                        <div className="form-group text-start col-md-10 mb-4">
                            <label htmlFor="fecha" style={{ color: "#A88043" }}>Derparture Date </label>
                            <input
                                type="datetime-local"
                                id="date"
                                className="form-control"
                                placeholder="Departure Date"
                            />
                        </div>
                        <div className="form-group text-start col-md-10 mb-4">
                            <label htmlFor="fecha" style={{ color: "#A88043" }}>Return Date </label>
                            <input
                                type="datetime-local"
                                id="date"
                                className="form-control"
                                placeholder="Return Date"
                            />
                        </div>
                        <div className="form-group text-start col-md-10 mb-4">
                            <label style={{ color: "#A88043" }}>Departure</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                placeholder="Departure"
                            />
                        </div>
                    </div>
                    <div className="form-group text-start col-md-10 mb-4">
                        <label style={{ color: "#A88043" }}>Arrival</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Arrival"
                        />
                    </div>
                    <div className="form-group text-start col-md-6 mb-4">
                        <label style={{ color: "#A88043" }}>Number of passangers</label>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="1"
                        />
                    </div>
                    <div className="form-row d-flex text-start col-md-6 mb-4">
                        <div className="form-group col-md-6 mb-4">
                            <label style={{ color: "#A88043" }}>One Way / Round Trip</label>
                            <select className="form-control" id="tipo" name="tipo">
                                <option value="volvo">One Way</option>
                                <option value="saab">Round Trip</option>
                            </select>
                        </div>
                        <MintButton text="Book Now!" tokens={100} styleClass="btn_reservar col-md-3 ml-40 mt-2" />
                    </div>
                </form>
                <button type="button" className="btn_back position-absolute bottom-3 end-3" onClick={() => navigate("/Principal#regreso")}>
                    Back
                </button>
            </div>

        </div>
    );
}
export { Flights };