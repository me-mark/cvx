import loadable from "utils/loadable";
import { CVXSpinner } from '../../components/common'

export const SOPModule = loadable(() => import('./SOPPage'), { fallback: CVXSpinner});