import React from "react";
import "./unfoldcards.scss";

const UnfoldCards = () => {
  return (
    <>
      <div class="triangle-row">
        <div class="triangle red down"></div>
        <div class="triangle transparent up delay-0"></div>
        <div class="triangle black up delay-0"></div>
        <div class="triangle transparent down delay-0"></div>
        <div class="triangle black down delay-0"></div>
        <div class="triangle grey up"></div>
        <div class="triangle grey up"></div>
        <div class="triangle transparent down delay-0"></div>
        <div class="triangle black down delay-0"></div>
        <div class="triangle black up"></div>
        <div class="triangle red up"></div>
        <div class="triangle transparent down delay-0"></div>
      </div>

      <div class="triangle-row--reverse">
        <div class="triangle red up"></div>
        <div class="triangle transparent down delay-0"></div>
        <div class="triangle black down"></div>
        <div class="triangle black up"></div>
        <div class="triangle grey up"></div>
        <div class="triangle transparent down delay-0"></div>
        <div class="triangle black down delay-0"></div>
        <div class="triangle grey up"></div>
        <div class="triangle black up delay-0"></div>
        <div class="triangle transparent down delay-0"></div>
        <div class="triangle red down"></div>
        <div class="triangle transparent up delay-0"></div>
      </div>
    </>
  );
};

export default UnfoldCards;
