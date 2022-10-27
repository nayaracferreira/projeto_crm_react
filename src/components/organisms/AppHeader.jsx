import React from "react";
import { Link } from "react-router-dom";

export default function AppHeaderHome() {
  return (
    <header>
      <nav>
        <h1>
          <Link
            to="/"
            aria-label="Tera Agenda: Encaminha para a página inicial"
          >
            Tera Agenda
          </Link>
        </h1>
      </nav>
    </header>
  );
}
