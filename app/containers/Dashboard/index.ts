import loadable from "utils/loadable";
import { CVXSpinner } from '../../components/common'

export const DashboardModule = loadable(() => import('./DashboardPage'), { fallback: CVXSpinner});