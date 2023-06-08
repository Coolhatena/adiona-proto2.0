function Carousel () {
	return(
		<div id="carouselExample" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExample" data-slide-to="0" className="active"/>
                <li data-target="#carouselExample" data-slide-to="1"/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./korea.jpeg" alt="Korea" className="d-block w-100"/>
                </div>

                <div className="carousel-item">
                    <img src="./amsterdam.jpeg" alt="Amsterdam" className="d-block w-100"/>
                </div>

                <div className="carousel-item">
                    <img src="./estanbul.jpeg" alt="Estanbul" className="d-block w-100"/>
                </div>

                <div className="carousel-item">
                    <img src="./moscu.jpeg" alt="Moscu" className="d-block w-100"/>
                </div>

                <div className="carousel-item">
                    <img src="./praga.jpeg" alt="Praga" className="d-block w-100"/>
                </div>
            </div>

            <a href="#carouselExample" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="visually-hidden">Anterior</span>
            </a>

            <a href="#carouselExample" className="carousel-control-next" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="visually-hidden">Siguiente</span>
            </a>
        </div>
	);
}

export { Carousel };