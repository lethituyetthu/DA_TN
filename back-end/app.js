var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var categoriesRouter = require('./routes/category');

var app = express();

// khai báo cor
const cors = require('cors');

const PORT = process.env.PORT || 3200;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Middleware để cấu hình CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));




//kết nối db
const connection = mongoose.connect('mongodb://localhost:27017/DA_TN',{
  useNewUrlParser: true,
  useUnifiedTopology:true
})
.then(()=> console.log('>>>>>>> DB đã kết nối thành công!!!!'))
.catch(err=> console.log('>>>>>>>> DB error: ',err));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter);
app.use('/categories',categoriesRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/products`);
  console.log(`http://localhost:${PORT}/products/66a1a2c62d1b61770fcf0052`);
  console.log(`http://localhost:${PORT}/categories`);
  console.log(`http://localhost:${PORT}/categories/66a1a4de2d1b61770fcf005b`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
