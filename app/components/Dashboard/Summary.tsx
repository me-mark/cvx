import './Summary.scss';
import iconCheckGroup from '../../images/icon-check-group.svg';
import iconBag from '../../images/icon-bag.svg';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const Summary = (props) => {
	const { title, subTitle, number, subNumber, linkTo } = props;
	const history = useHistory();
	const handleClickTitle = () => {
		if (linkTo) {
			history.push(linkTo);
		}
	}
	return (
		<div className="dashboard__summary">
			<div className="dashboard__summary__1">
				<img src={iconCheckGroup} className="dashboard__summary__1__icon" onClick={handleClickTitle} />
				<div className="dashboard__summary__1__text" onClick={handleClickTitle}>{number}</div>
				<div className="dashboard__summary__1__title" onClick={handleClickTitle}>{title}</div>
			</div>
			<div className="dashboard__summary__2">
				<img src={iconBag} className="dashboard__summary__2__icon" onClick={handleClickTitle} />
				<div className="dashboard__summary__2__text" onClick={handleClickTitle}>{subNumber}</div>
				<div className="dashboard__summary__2__title" onClick={handleClickTitle}>{subTitle}</div>
			</div>
		</div>
	);
}