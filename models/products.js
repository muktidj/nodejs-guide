const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(callTitle) {
    this.title = callTitle;
  }

  save() {
    const callPath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(callPath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(callPath, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(callBack) {
    const callPath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(callPath, (err, fileContent) => {
      if (err) {
        return [];
      }
      return JSON.parse(fileContent);
    });
  }
};
