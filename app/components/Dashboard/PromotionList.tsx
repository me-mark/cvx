import { CVXTitle } from 'components/common';
import React from 'react';
import { Promotion } from './Promotion';

export const PromotionList = () => {
  return (
    <div className="dashboard__promotion-list">
      <CVXTitle title="Promo for you!" />
      <div className="dashboard__promotion-list__list">
        <Promotion title="Big Sale 50% December 12th" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum egestas scelerisque. Aliquam vel nisi at nulla porta molestie et." />
        <Promotion title="Big Sale 50% December 12th" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum egestas scelerisque. Aliquam vel nisi at nulla porta molestie et." />
      </div>
    </div>
  );
}