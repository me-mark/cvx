import { CVXSpinner } from 'components/common';
import loadable from '../../utils/loadable';

export const ComplianceModule = loadable(() => import('./CompliancePage'), { fallback: CVXSpinner });