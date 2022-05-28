import React, { useRef } from "react";
import LazyLoad from "react-lazyload";
const ReactLazyComponent = ({ item }) => {
  const placeholderRef = useRef(null);
  return (
    <div className="w-full relative">
      <div
        ref={placeholderRef}
        className="absolute top-0 left-0 right-0 bottom-0 animate-pulse"
      />
      <LazyLoad>
        <div
          onLoad={() => placeholderRef.current.remove()}
          className="absolute  left-0 w-full h-full"
        >
          {item.title}
        </div>
      </LazyLoad>
    </div>
  );
};
export default ReactLazyComponent;
