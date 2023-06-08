function Carousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide carouse-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./korea.jpeg" alt="Korea" className="overlay-image" />
          <div className="container">
            <h1>Seoul</h1>
            <p>Discover new places now</p>
          </div>
        </div>

        <div className="carousel-item" data-interval="1000">
          <img
            src="./amsterdam.jpeg"
            alt="Amsterdam"
            className="overlay-image"
          />
          <div className="container">
            <h1>Amsterdam</h1>
            <p>Discover new places now</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./estanbul.jpeg" alt="Estanbul" className="overlay-image" />
          <div className="container">
            <h1>Istanbul</h1>
            <p>Discover new places now</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./budapest.jpeg" alt="Budapest" className="overlay-image" />
          <div className="container">
            <h1>Budapest</h1>
            <p>Discover new places now</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./praga.jpeg" alt="Praga" className="overlay-image" />
          <div className="container">
            <h1>Prague</h1>
            <p>Discover new places now</p>
          </div>
        </div>
      </div>

      <a
        href="#carouselExample"
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </a>

      <a
        href="#carouselExample"
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export { Carousel };
