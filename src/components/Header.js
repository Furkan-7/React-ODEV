import React from "react";
import ppimage from "./pp.jpg"

function Header() {
  return (
    <header>
      <img src={ppimage} alt="Profil Fotoğrafı" />
      <h1>Furkan KOCABEY CV </h1>
      <p>Yazılım Geliştirici</p>
    </header>
  );
}

export default Header;
