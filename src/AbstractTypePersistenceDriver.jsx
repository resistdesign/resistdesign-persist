/**
 * An abstract class representing the API of a Type Persistence Driver
 * implementation.
 * @param {Object} config A value to be assigned to the `config` property of the
 * instance.
 * */
export default class AbstractTypePersistenceDriver {
  /**
   * Driver specific connection and operation configuration.
   * @member {Object.<string, *>}
   * */
  config;

  constructor (config = {}) {
    this.config = config;
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

  /**
   * Delete an item of the given type by id.
   * @abstract
   * @param {string} id The id of the item to be deleted.
   * @param {string} typeName The name of the type.
   * */
  async delete (id, typeName) {
  }

  /**
   * @typedef {Object} SearchResults
   * @property {number} totalItems The total number of items matching the query.
   * @property {number} totalPages The total number of pages of items based the
   * `itemsPerPage` option.
   * @property {Array} data The list of items matching the query or the list of
   * ids if `onlyIds` was enabled.
   * */

  /**
   * Search for items of the given type.
   * @abstract
   * @param {Object} query ([UTS](https://gist.github.com/resistdesign/6be9251161a8a015313c2d899530f925))
   * The query used to select the items.
   * @param {Object} options Additional search configuration.
   * @param {boolean} options.count A flag designating that only `totalItems`
   * will be returned on the results object.
   * @param {boolean} options.onlyIds A flag designating that only ids will be
   * returned in the results `data` list.
   * @param {boolean} options.itemsPerPage The number of items to return in the
   * current "page" of results. Setting this option will enable result paging.
   * @param {boolean} options.pageNumber (1 based) The page of items to return
   * when `itemsPerPage` is used.
   * @param {boolean} options.orderBy The name of the field by which returned
   * items will be ordered.
   * @param {boolean} options.descending A flag designating whether or not the
   * order of returned items will be reversed.
   * @returns {SearchResults} An object containing paging and item information
   * based on the given query.
   * */
  async search (query = {}, options = {}) {
  }
}
