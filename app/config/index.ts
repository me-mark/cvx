import devConfig from './development';
import stagConfig from './staging';
import prodConfig from './production';

let configEnv: { ApiUrl };

switch (process.env.NODE_ENV) {
  case 'production':
    configEnv = prodConfig;
    break;
  case 'staging':
    configEnv = stagConfig;
    break;
  default:
  case 'development':
    configEnv = devConfig;
    break;
}

const config = configEnv;
export { config };
