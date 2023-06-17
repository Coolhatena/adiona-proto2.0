function Flights() {
    return (
        <div className="flight">
            <div className="vuelo">
                <video className="vuelo contrast-100" autoPlay muted controls>
                    <source src="vuelo.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="container_vuelo">
                <h1>Preparate para viajar!</h1>
                    <button className="btn_login sign_in" type="submit">
                          Sign in
                    </button>
            </div>

            <form className="pl-16 pr-16">
                <h1 className="pt-4 pb-4">Reservacion de vuelo</h1>
                <div className="form-row d-flex text-left">
                    <div className="col m-4">
                        <label className="pl-1">First name</label>
                        <input type="text" className="form-control" id="validationServer01" placeholder="First name" value="Mark" required />
                        
                    </div>
                    <div className="col m-4">
                        <label className="pl-1">Last name</label>
                        <input type="text" className="form-control" id="validationServer01" placeholder="First name" value="Mark" required />
                    </div>
                </div>
                
                <div className="form-row text-left">
                    <div className="col m-4 w-50">
                        <label className="pl-1">City</label>
                        <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col m-4 w-50">
                        <label className="pl-1">State</label>
                        <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col m-4 w-50">
                        <label className="pl-1">Zip</label>
                        <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check col m-4 text-left">
                        <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                        <label className="form-check-label">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <button className="btn_reservar" type="submit">Submit form</button>
            </form>
        </div>
    );
}
export { Flights };