import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const MyImage = ({ src }) => (
  <LazyLoadImage
    effect='blur'
    src={src}
    alt='Images'
   style={{height:"100%",width:"100%"}}
  />
);
