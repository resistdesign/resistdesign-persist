import expect from 'expect.js';
import AbstractTypePersistenceDriver from './AbstractTypePersistenceDriver';

const atpdConfig = {
  option1: true
};
const atpd = new AbstractTypePersistenceDriver(atpdConfig);

module.exports = {
  AbstractTypePersistenceDriver: {
    'should be a class': () => {
      expect(AbstractTypePersistenceDriver).to.be.a(Function);
    },
    'config': {
      'should be an instance property with an object value': () => {
        expect(atpd.config).to.be.an(Object);
        expect(atpd.config).to.equal(atpdConfig);
        expect(atpd.config.option1).to.equal(true);
      }
    },
    'create': {
      'should be a function': () => {
        expect(atpd.create).to.be.a(Function);
      }
    },
    'read': {
      'should be a function': () => {
        expect(atpd.read).to.be.a(Function);
      }
    },
    'update': {
      'should be a function': () => {
        expect(atpd.update).to.be.a(Function);
      }
    },
    'delete': {
      'should be a function': () => {
        expect(atpd.delete).to.be.a(Function);
      }
    },
    'search': {
      'should be a function': () => {
        expect(atpd.search).to.be.a(Function);
      }
    },
  }
};