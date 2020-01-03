const fs = require("fs");
const path = require("path");

const callPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

  const getProductsFromFile = callBack => {
    fs.readFile(callPath, (err, fileContent) => {
      if (err) {
        callBack([]);
      } else {
        callBack(JSON.parse(fileContent));
      }
    });
  };

module.exports = class Product {
  constructor(callTitle) {
    this.title = callTitle;
  }
  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(callPath, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
};
