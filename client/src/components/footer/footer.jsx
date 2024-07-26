import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 pt-4 pb-4">
      <div className="container">
        <div className="row">
          {/* Dirección */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Dirección</h5>
            <p>123 Main Street, Anytown, USA</p>
          </div>

          {/* Contacto */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Contacto</h5>
            <p>
              Email:{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
            <p>Telefono: (123) 456-7890</p>
          </div>

          {/* Redes Sociales */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="text-uppercase">Sígueme</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-primary"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-info"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-danger"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2024 Phrcook. All rights reserved.</p>
      </div>
    </footer>
  );
}
