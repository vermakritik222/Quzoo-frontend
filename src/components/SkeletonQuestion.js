import React from "react";
import "./sass/SkeletonQuestion.scss";

function SkeletonQuestion() {
  return (
    <div className="SkeletonQuestion">
      <div className="SkeletonQuestion__statement">
        <div className="skeleton skeleton__text"></div>
        <div className="skeleton skeleton__text"></div>
        <div className="skeleton skeleton__text"></div>
        <div className="skeleton skeleton__text"></div>
      </div>
      <div className="SkeletonQuestion-wrapper">
        <div className="SkeletonQuestion__optionLabel">
          <span>(a)</span>
          <div className="skeleton skeleton__option"></div>
        </div>
        <div className="SkeletonQuestion__optionLabel">
          <span>(b)</span>
          <div className="skeleton skeleton__option"></div>
        </div>
        <div className="SkeletonQuestion__optionLabel">
          <span>(c)</span>
          <div className="skeleton skeleton__option"></div>
        </div>
        <div className="SkeletonQuestion__optionLabel">
          <span>(d)</span>
          <div className="skeleton skeleton__option"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonQuestion;
