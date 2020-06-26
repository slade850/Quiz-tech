import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getThemes } from "../store/themeStore";
import Header from "../component/header";
import { useParams } from "react-router-dom";

const Themes = () => {
  let { id } = useParams();
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
  console.log(id);
  //   const displayThemes = themes.map((theme, index) => (
  //     <div key={index}>{theme.title}</div>
  //   ));
  return (
    <div>
      {themes.map((theme, i) => {
        return (
          <div key={i}>
            {theme.id} {theme.title}
          </div>
        );
      })}
    </div>
  );
};

export default Themes;
