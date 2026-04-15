const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

// const {mongoConnect} = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('69df75d4cb435049e3088069')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// mongoConnect(client => {
//   console.log(client);
//   app.listen(3000);
// });
mongoose.connect("mongodb+srv://bhargavithorat_db_user:Cw8u2wtV9WTiprxS@cluster0.sdlmmtd.mongodb.net/shop?appName=Cluster0")

  .then(result => {
    //findOne will always give the first user it finds 
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Bhargavi',
          email: 'bhargavi@thorat.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });

    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });