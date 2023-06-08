function Tours () {
	return(
        <form className="form">
            <div className="title">
                <h1>Tours</h1>
            </div>
            <div className="form-row">
                <div className="form-group text-start col-md-6 mb-4">
                    <label htmlFor="Nombre Pasajero">Nombre Pasajero</label>
                    <input type="name" id="name_pas" className="form-control" placeholder="Nombre Pasajero" />
                </div>
                <div className="form-group text-start col-md-6 mb-4">
                    <label htmlFor="fecha">Fecha de salida / Return</label>
                    <input type="datetime-local" id="date" className="form-control" placeholder="Fecha Salida" />

                </div>
                <div className="form-group text-start col-md-6 mb-4">
                    <label htmlFor="password">Aeropuerto Salida</label>
                    <input type="password" className="form-control" id="password" placeholder="Aeropuerto Salida" />
                </div>
            </div>
            <div className="form-group text-start col-md-6 mb-4">
                <label>Aeropuerto Llegada</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Aeropuerto Llegada" />
            </div>
            <div className="form-group text-start col-md-6 mb-4">
                <label>Num. Personas</label>
                <input type="number" min="1" max="20" className="form-control" id="inputAddress2" />
            </div>
            <div className="form-row text-start col-md-6 mb-4">
                <div className="form-group col-md-6 mb-4">
                    <label>Sencillo /  Redondo</label>
                    <select className="form-control" id="tipo" name="tipo">
                        <option value="volvo">Sencillo</option>
                        <option value="saab">Redondo</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn_buy">Comprar</button>
        </form>
    );
}

export { Tours };