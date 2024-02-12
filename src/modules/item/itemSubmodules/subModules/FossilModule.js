const getData = require("../functions/getData");

class FossilModule {
  constructor(url) {
    this.url = url;
    this.type = "Fossil";
  }

  async getData(requestedProperties) {
    return getData(this.url, this.type, requestedProperties);
  }
}

//export FossilModule;
module.exports = FossilModule;