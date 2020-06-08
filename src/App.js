import React, { useEffect } from "react";
import { debounceFunction } from "./helpers/debounce";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let lazyloadImages;

  useEffect(() => {
    lazyloadImages = document.querySelectorAll("img.lazy-loaded");
    lazyload();
  }, []);

  useEffect(() => {
    const debouncedLazyLoad = debounceFunction(lazyload, 20);
    document.addEventListener("scroll", debouncedLazyLoad);
    return () => {
      document.removeEventListener("scroll", debouncedLazyLoad);
    };
  }, []);

  function lazyload() {
    let scrollTop = window.pageYOffset;
    lazyloadImages.forEach(function (img) {
      if (img.offsetTop < window.innerHeight + scrollTop) {
        img.src = img.dataset.src;
        img.classList.remove("lazy-loaded");
      }
    });
  }

  return (
    <div className="content">
      <header>
        <div className="logo-container">
          <img data-src={logo} alt="logo" className="lazy-loaded" />
        </div>
        <div className="content__personal-info-container">
          <p>Conocimientos</p>
          <ul>
            <li>Nombre</li>
            <li>Edad</li>
            <li>Mail</li>
            <li>Telefono</li>
          </ul>
        </div>
        <div className="content__personal-info-container">
          <p>Conocimientos</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>Angular</li>
          </ul>
        </div>
        <div className="content__personal-info-container">
          <p>Conocimientos</p>
          <ul>
            <li>Cantar</li>
            <li>Comer</li>
            <li>Guitarra</li>
            <li>Cocinar</li>
          </ul>
        </div>
      </header>
      <p className="content__text">
        Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
        Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
        Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
        Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
        Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
        Texto Texto Texto Texto Texto Texto Texto Texto{" "}
      </p>
      <div className="content__video-container">
        <div className="content__video">
          <video width="100%" height="100%" poster={logo} controls>
            <source src="lanona.mp4" type="video/ogg" />
          </video>
          No video for you, sorry not sorry
        </div>
      </div>
      <div className="content__images-container">
        <div className="content__image">
          <img
            alt="description 1"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 2"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 3"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
        <div className="content__image">
          <img
            alt="description 4"
            className="lazy-loaded"
            data-src={logo}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
