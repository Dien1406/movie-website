import React from "react";
import "./movieContent.css";
import titleImg from "../images/transformer-title.png";
import Button from "./Button";
function MovieContent() {
  return (
    <div className="content active">
      <img src={titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>Year</span>
        <span>
          <i></i>age
        </span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illo
        ad debitis optio. Provident ut quisquam suscipit, vero, sequi accusamus
        corrupti inventore pariatur repudiandae, cupiditate a eaque soluta
        deserunt ratione eos architecto non amet! Dolor debitis modi repellendus
        sed minima velit, quia similique ducimus natus quasi laboriosam beatae
        placeat in.
      </p>
      <div className="button">
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="My List"
        />
      </div>
    </div>
  );
}

export default MovieContent;
