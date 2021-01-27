import { CVXSpinner } from 'components/common';
import loadable from '../../utils/loadable';

export const CovenantModule = loadable(() => import('./CovenantPage'), { fallback: CVXSpinner });