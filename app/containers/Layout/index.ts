import { CVXSpinner } from 'components/common';
import loadable from '../../utils/loadable';

export const Layout = loadable(() => import('./Layout'), { fallback: CVXSpinner });