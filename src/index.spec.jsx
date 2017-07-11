import expect from 'expect.js';
import Persist from './index';

module.exports = {
  Persist: {
    'should be a class': () => {
      expect(Persist).to.be.a(Function);
    }
  }
};
