import React from "react";

export default function Footer() {
  return (
    <div>
      <div>
        <h3>Direccion</h3>
        <p>123 Main Street, Anytown, USA</p>
      </div>
      <div>
        <h3>Contacto</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div>
        <h3>Sigueme</h3>
        <p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
        <p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
