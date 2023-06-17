function Flights() {
    return (
        <div className="flight">
            <video className="vuelo" autoPlay muted controls>
                <source src="vuelo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <form>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label>First name</label>
                        <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Last name</label>
                        <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend3">@</span>
                            </div>
                            <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label>City</label>
                        <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>State</label>
                        <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
                        <div className="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Zip</label>
                        <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
                        <label className="form-check-label">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
        </div>
    );
}
export { Flights };