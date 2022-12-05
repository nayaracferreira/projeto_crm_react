import React from "react";
import { Link } from "react-router-dom";

export default function AppHeaderHome() {
  return (
    <header>
      <nav>
        <h1 aria-label="Tera Agenda: Encaminha para a página inicial">
          <Link to="/">Tera Agenda</Link>
        </h1>
      </nav>
    </header>
  );
}
