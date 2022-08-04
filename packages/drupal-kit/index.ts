import DrupalState from './src/PantheonDrupalState';
import { fetchJsonapiEndpoint, translatePath } from '@gdwc/drupal-state';
import defaultFetch from './src/fetch/defaultFetch';
import addSurrogateKeyHeader from './src/utils/addSurrogateKeyHeader';
import updateMaxAge from './src/utils/updateMaxAge';

export {
  DrupalState,
  fetchJsonapiEndpoint,
  translatePath,
  defaultFetch,
  addSurrogateKeyHeader,
  updateMaxAge,
};
