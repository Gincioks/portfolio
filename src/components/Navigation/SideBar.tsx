import React, { useEffect, useRef, useState } from "react";
import fb_icon from "../../views/assets/fb_logo.png";
import insta_icon from "../../views/assets/insta_logo.png";
import you_icon from "../../views/assets/youtube_logo.png";
import moon_icon from "../../views/assets/moon-solid.svg";
import sun_icon from "../../views/assets/sun-solid.svg";
import { useSelector } from "react-redux";
import { RootStore } from "../../store/Store";

type Props = {};

const Toolbar: React.FC<Props> = (props) => {
  const { language }: any = useSelector((state: RootStore) => state.language);
  const [theme, setTheme] = useState(true);
  const [sideBar, setSideBar] = useState(false);
  const themeHandler = () => {
    setTheme(!theme);
  };
  let attachedClasses = ["side-bar", "Close"];
  const ref: any = useRef();

  if (sideBar) {
    attachedClasses = ["side-bar", "Open"];
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, [sideBar]);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSideBar(false);
    }
  };

  const sidebarHandler = () => {
    setSideBar(!sideBar);
    console.log(sideBar);
  };

  return (
    <div className={attachedClasses.join(" ")} ref={ref}>
      <input type="checkbox" id="menu_checkbox" />
      <label onClick={sidebarHandler} htmlFor="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <div className="social_links">
        <a href="http://fb.com">
          <img src={fb_icon} alt="facebook" />
        </a>
        <img src={insta_icon} alt="instagram" />
        <img src={you_icon} alt="youtube" />
      </div>
      <div className="other_links">
        <button
          className="theme_toggle"
          onClick={themeHandler}
          title={theme ? language.dark_mode : language.light_mode}
        >
          <img src={theme ? moon_icon : sun_icon} alt="dark_theme" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
