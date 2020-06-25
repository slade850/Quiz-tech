import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getThemes } from "../store/themeStore";

import { Link } from "react-router-dom";
const Themes = () => {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themeStore.theme);
  useEffect(() => {
    dispatch(getThemes())
      .then((res) => {
        console.log(" theme recupérés avec success");
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  console.log("mes themes", themes);
  //   const displayThemes = themes.map((theme, index) => (
  //     <div key={index}>{theme.title}</div>
  //   ));
  return (
    <div>
      {themes.map((theme, i) => {
        return (
          <div key={i}>
            {theme.id} {theme.title}
            <button className="theme-btn">           <li>
            <Link to={ `/question/theme/${theme.id}` }>Questions theme {theme.id}</Link>
          </li></button>
          </div>
        );
      })}
    </div>
  );
};

export default Themes;
