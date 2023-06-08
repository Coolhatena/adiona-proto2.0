const Carousel = () => {
	return(
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active" style = {{backgroundImage: 'url("korea.jpeg")'}}>
                    <div className="container">
                        <h1>Example</h1>
                        <p>Visita...</p>
                    </div>
                </div>
                <div class="carousel-item" style = {{backgroundImage: 'url("amsterdam.jpeg")'}}>
                    <div className="container">
                        <h1>Example</h1>
                        <p>Visita...</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide" />
                </div>
            </div>
            <a href="#myCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a href="#myCarousel" class="carousel-control-next" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
	);
}

export default Carousel;