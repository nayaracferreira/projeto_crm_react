import React from "react";

import facebook from "../../assets/logo_facebook.png";
import instagram from "../..//assets/logo_instagram.png";
import youtube from "../../assets/logo_youtube.png";
import gmail from "../../assets/logo_gmail.png";

import { Link } from "react-router-dom";

export default function AppFooter() {
  return (
    <footer>
      <h2 className="textShadowTitles" id="sigaNos">
        Sigam-nos nas Redes sociais
      </h2>
      <div className="redes">
        <Link to="https://pt-br.facebook.com/">
          <img src={facebook} alt="Logo Facebook: círculo com f no centro" />
        </Link>
        <Link to="https://www.instagram.com/">
          <img
            src={instagram}
            alt="Logo do Instagram: círculo com uma câmera em perspectiva frontal no centro"
          />
        </Link>
        <Link to="https://www.youtube.com/">
          <img
            src={youtube}
            alt="Logo do Youtube: círculo onde no centro tem um retangulo com um triângulo rotacionado"
          />
        </Link>
      </div>

      <div className="cabecalho">
        <p id="faleConosco">
          <b>Fale conosco</b>
        </p>
        <div>
          <img
            src={gmail}
            alt="Logo Gmail: a representação de um envelope fechado"
          />
        </div>
        <div>
          <Link to="http://gmail.com">nayara.dcf@gmail.com</Link>
        </div>
        <div>
          <Link to="http://gmail.com">renatogamedesigner@gmail.com</Link>
        </div>

        <p id="cComercial">© 2022 Tera Agenda Serviços de Tecnologia Ltda.</p>
      </div>
    </footer>
  );
}
