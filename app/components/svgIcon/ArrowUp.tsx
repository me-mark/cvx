import "./ArrowUp.scss";
import React from "react";

interface ArrowUpProps {
  className?: string;
}
export function ArrowUp(props: ArrowUpProps) {
  const { className } = props;
  const style = {
    width: 13,
    height: 13,
    transition: "transform .5s",
    fill: "#565b67",
  };
  return (
    <svg className={className} style={style}>
      <use xlinkHref="#arrow-up">
        <symbol id="arrow-up" viewBox="0 0 13.002 13">
          <path
            id="arrow-up"
            d="M12.53,7.649,7.655,12.524a1.629,1.629,0,1,1-2.31-2.3l2.114-2.1H1.625a1.625,1.625,0,0,1,0-3.25H7.459l-2.114-2.1a1.629,1.629,0,0,1,2.31-2.3L12.53,5.353a1.638,1.638,0,0,1,0,2.3Z"
            transform="translate(13.002) rotate(90)"
          ></path>
        </symbol>
      </use>
    </svg>
  );
}
