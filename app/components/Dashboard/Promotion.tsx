import iconPaper from '../../images/icon-paper.svg';
import './Promotion.scss';
import React from 'react';

export const Promotion = (props) => {
  const { title, content } = props;
  return (
    <div className="dashboard__promotion">
      <div className="dashboard__promotion__icon">
        <img src={iconPaper} />
      </div>
      <div className="dashboard__promotion__title">{title}</div>
      <div className="dashboard__promotion__content">{content}</div>
    </div>
  )
}