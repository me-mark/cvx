import iconArrowRight from '../../images/icon-arrow-right.svg';
import './Task.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PathKeys } from 'types';

export const Task = (props) => {
  const { label, title, linkTo } = props
  const history = useHistory();
  return (
    <div className="dashboard__task">
      {/* <div className="dashboard__task__label">{label}</div> */}
      <div className="dashboard__task__title">{title}</div>
      <div className="dashboard__task__icon" onClick={() => { history.push(linkTo) }}>
        <img src={iconArrowRight} />
      </div>
    </div>
  );
}