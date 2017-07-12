/**
 * @typedef {Object} SearchResults
 * @property {number} totalItems The total number of items matching the query.
 * @property {number} totalPages (1 based) The total number of pages of items based the
 * `itemsPerPage` option.
 * @property {number} currentPage (1 based) The current page of items.
 * @property {Array.<Object>|Array.<string>} data The list of items matching the
 * query or the list of ids if `onlyIds` was enabled.
 * */
const SearchResults = {};

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
   * Search for items of the given type.
   * @abstract
   * @param {Object} query The Universal Query Structure
   * ([UQS](https://gist.github.com/resistdesign/da4bbee3f4e92d715e4ddfa14c9fd18b))
   * used to describe the set of items to be returned.
   * @param {Object} options Additional search configuration.
   * @param {boolean} options.count A flag designating that only `totalItems`
   * will be returned on the results object.
   * @param {boolean} options.onlyIds A flag designating that only ids will be
   * returned in the results `data` list.
   * @param {number} options.itemsPerPage The number of items to return in the
   * current "page" of results. Setting this option will enable result paging.
   * @param {number} options.pageNumber (1 based) The page of items to return
   * when `itemsPerPage` is used.
   * @param {string} options.orderBy The name of the field by which returned
   * items will be ordered.
   * @param {boolean} options.descending A flag designating whether or not the
   * order of returned items will be reversed.
   * @returns {SearchResults} An object containing paging and item information
   * based on the given query and options.
   * */
  async search (query = {}, options = {}) {
  }
}
