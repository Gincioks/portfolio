import React from "react";
import { Logo } from "../Navigation/Logo";
import illiustration from "../../views/assets/animation.svg";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useSelector } from "react-redux";
import { RootStore } from "../../store/Store";

type Props = {};

export const Header: React.FC<Props> = (props) => {
  const { language }: any = useSelector((state: RootStore) => state.language);

  return (
    <header className="header">
      <nav>
        <Logo />
        <ul className="navbar">
          <a href="http://fb.com">
            <li>{language.navigation?.home}</li>
          </a>
          <a href="service">
            <li>{language.navigation?.service}</li>
          </a>
          <a href="about">
            <li>{language.navigation?.about}</li>
          </a>
          <a href="contact">
            <li>{language.navigation?.contact}</li>
          </a>
          <LanguageSelector />
        </ul>
      </nav>
      <section className="content">
        <div className="intro_text">
          <h2>{language?.title}</h2>
          <h1>{language?.title_2}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia veniam cum maiores sit officia, at incidunt amet odio
            facere.
          </p>
          <button className="order">{language.contact_now}</button>
        </div>
        <img src={illiustration} alt="" />
      </section>
    </header>
  );
};
