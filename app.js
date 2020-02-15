const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
//const db = require("./util/database");
const sequalize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart-Item");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req,res,next) => {
  User.findByPk(1).then(user => {
    req.user = user
    next()
  }).catch(err => console.log(err))
})

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'})
User.hasMany(Product)
// User.hasOne(Cart)
// Cart.belongsTo(User)
// Cart.belongsToMany(Product, {through: CartItem})
// Product.belongsToMany(Cart, {through: CartItem})


sequalize
  .sync()
  .then(result => {
    //console.log(result);
    return User.findByPk(1)

  })
  .then(user => {
    if (!user) {
      return User.create({name: 'MuktiDJ', email: 'muktidwijatmoko@gmail.com'})
    }
    return user;
  })
  .then(user => {
    console.log(user);
    app.listen(9000);

  })
  .catch(err => {
    console.log(err);
  });
