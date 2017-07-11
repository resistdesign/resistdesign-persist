/**
 * An abstract class representing the API of a Type Persistence Driver
 * implementation.
 * @param {Object} config An object with properties to be assigned to the new
 * instance.
 * */
export default class AbstractTypePersistenceDriver {
  constructor (config) {
    Object.assign(this, config);
  }

  /**
   * Create an item of the given type.
   * @abstract
   * @param {Object} item The item to be created.
   * @param {string} typeName The name of the type.
   * @returns {string} The id of the newly created item.
   * */
  async create (item, typeName) {
  }

  /**
   * Read an item of the given type by id.
   * @abstract
   * @param {string} id The id of the item to be read.
   * @param {string} typeName The name of the type.
   * @returns {Object} The item.
   * */
  async read (id, typeName) {
  }

  /**
   * Update an item of the given type.
   * @abstract
   * @param {Object} item The item to be updated.
   * @param {string} item.id The id of the item to be updated.
   * @param {string} typeName The name of the type.
   * */
  async update (item, typeName) {
  }
}
