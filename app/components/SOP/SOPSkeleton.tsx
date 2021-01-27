import skeleton_SOP_detail from '../../images/skeleton_SOP_detail.svg';
import './SOPDetailSkeleton.scss';
import React from 'react';

export const SOPDetailSkeleton = () => {
  return (
    <div className="sop-skeleton__detail">
      <img src={skeleton_SOP_detail}/>
    </div>
  )
}