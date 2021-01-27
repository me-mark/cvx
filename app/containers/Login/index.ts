import loadable from "utils/loadable";

export const LoginModule = loadable(() => import('./LoginPage'), { fallback: 'Loading' })