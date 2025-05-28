"use client";
import './CarroselPrincipal.css'

export default function CarroselPrincipal() {
  const imagens = ["/banner1.jpeg", "/banner2.png", "/banner3.png"];

  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade carrossel-custom"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {imagens.map((src, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={src}
                  className="d-block custom-img"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
