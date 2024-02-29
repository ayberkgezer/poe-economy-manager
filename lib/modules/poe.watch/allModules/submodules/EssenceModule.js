const getData = require("../functions/getData");

/**
 * Represents a module for fetching data related to Essences.
 *
 * @class
 */
class EssenceModule {
  /**
   * The query URL for fetching Essence data.
   *
   * @private
   * @type {string}
   */
  #queryUrl;

  /**
   * Creates an instance of EssenceModule.
   *
   * @param {string} leagueUrl - The league URL to fetch data from.
   */
  constructor(leagueUrl) {
    /**
     * The constructed query URL for fetching Essence data.
     *
     * @private
     * @type {string}
     */
    this.#queryUrl = `essence${leagueUrl}`;
  }

  /**
   * Asynchronously retrieves Essence data based on the specified properties.
   *
   * @async
   * @param {Array<string>} requestedProperties - An array of properties to retrieve.
   * @returns {Promise<Object>} A promise that resolves to the retrieved data.
   */
  async getData(requestedProperties) {
    try {
      /**
       * Calls the getData function to fetch Essence data.
       *
       * @type {Promise<Array<Object>>}
       */
      return getData(this.#queryUrl, requestedProperties);
    } catch (error) {
      /**
       * Throws an error if there's an issue fetching or processing the Essence data.
       *
       * @throws {Error}
       */
      throw new Error(`Error fetching Essence data: ${error.message}`);
    }
  }
}

// Export the EssenceModule class
module.exports = EssenceModule;