export {
  default as AbstractTypePersistenceDriver
} from './AbstractTypePersistenceDriver';

export default class Persist {
  constructor (config) {
    Object.assign(this, config);
  }
}
