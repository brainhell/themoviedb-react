import * as React from "react";
import * as Styles from "./Footer.pcss";
import tmdbSvg from "@img/tmdb.svg";
import githubSvg from "@img/github.svg";

const Footer = () => (
  <div className={Styles.footer}>
    <img src={tmdbSvg} className={Styles.tmdb} alt="tmdb" />
    <a href="https://github.com/lviit/themoviedb-react/">
      <img src={githubSvg} alt="github" className={Styles.github} />
    </a>
  </div>
);
export default Footer;
