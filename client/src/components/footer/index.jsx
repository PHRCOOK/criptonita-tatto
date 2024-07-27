import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
            <div className="mt-3 d-flex justify-content-between">
              <div className="d-flex flex-column align-items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary mb-2"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <span>Facebook</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info mb-2"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <span>Twitter</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-danger mb-2"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <span>Instagram</span>
              </div>
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
