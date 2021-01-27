import "./CVXTab.scss";
import React, { useState, useEffect } from "react";
import { CVXTabModel, CVXTabDataModel } from "../commonModels";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function CVXTab(props: CVXTabModel) {
  const { tabData, defaultActive, onClickTab } = props;
  const [activeTab, setActiveTab] = useState<CVXTabDataModel["id"]>(
    defaultActive || tabData[0].id
  );
  const [style, setStyle] = useState({});
  const [positionX, setPositionX] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  const handleClickTab = async (item: CVXTabDataModel) => {
    try {
      setActiveTab(item.id);
      onClickTab(item);
    } catch (ex) {
      throw ex;
    }
  };

  const doTranslateX = (type: "next" | "previous") => {
    const newPositionX = type === "next" ? positionX - 300 : positionX + 300;
    const newStyle = {
      transform: `translateX(${newPositionX}px)`,
    };
    setStyle(newStyle);
    setPositionX(newPositionX);
  };
  const handleClickPrevious = () => doTranslateX("previous");
  const handleClickNext = () => doTranslateX("next");

  useEffect(() => {
    const widthOfContent = document.getElementsByClassName("status-wrapper")[0]
      .clientWidth;
    const widthOfParent = document.getElementsByClassName("cvx-tab__content")[0]
      .clientWidth;
    const isScrollable = widthOfContent > widthOfParent;
    setScrollable(isScrollable);
  }, []);

  useEffect(() => {
    if (defaultActive) {
      setActiveTab(defaultActive);
    }
  }, [defaultActive]);

  return (
    <div className="cvx-tab__wrapper">
      <div className="cvx-tab__content">
        <div className="status-wrapper flex-layout margin-4" style={style}>
          {tabData.map((item: any, index: number) => (
            <div
              className={
                activeTab === item.id
                  ? "status select-active center cvx-tab__item active"
                  : "status select-active center cvx-tab__item"
              }
              onClick={() => handleClickTab(item)}
              key={index}
            >
              <h2 className="title-1 cvx__main-content relative cvx-tab__title">
                {item.label}
                <span className="status-check">
                  <svg className="status-check-ico">
                    <use xlinkHref="#check" />
                  </svg>
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
      {scrollable && positionX < 0 && (
        <div className="cvx-tab__wrapper__last-button" onClick={handleClickPrevious}>
          <FontAwesomeIcon icon={faAngleLeft} color="currentColor" size="3x" />
        </div>
      )}
      {scrollable && positionX >= 0 && (
        <div className="cvx-tab__wrapper__next-button" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} color="currentColor" size="3x" />
        </div>
      )}
    </div>
  );
}
