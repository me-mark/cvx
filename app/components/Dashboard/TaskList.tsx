import React from 'react';
import { Task } from './Task';
import { CVXTitle } from 'components/common';
import { RoutePaths } from 'containers/App/routes';

export const TaskList = () => {
  return (
    <div className="dashboard__task-list">
      <CVXTitle title="Take Action" />
      <div className="dashboard__task-list__list">
        <Task title="Edit your Statement of Position" linkTo={`${RoutePaths.SOP}`}/>
        <Task title="View your current and new Covenants" linkTo={`${RoutePaths.COVENANT}`} />
      </div>
    </div>
  );
}