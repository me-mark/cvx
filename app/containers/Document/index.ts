import loadable from "utils/loadable";
import { CVXSpinner } from '../../components/common'

export const DocumentModule = loadable(() => import('./DocumentPage'), { fallback: CVXSpinner});