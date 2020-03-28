require('dotenv').config();
const express = require('express');
const dbUtils = require('../server/config/mongoose');
const app = express();
const compression = require('compression');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const postRoutes = require('../server/routes/post');
const cookieParser = require('cookie-parser');
const HTTP_STATUS = require('../server/utility/constants');
const PORT = process.env.PORT || "5000";

// middleWares 
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(logger('tiny'));
app.use(cookieParser());

// connect to mongo 
dbUtils.connectToDb();

// routes 
app.use('/post', postRoutes);

//ERROR HANDLER 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(HTTP_STATUS.NOT_FOUND, 'route doesn\'t exist'))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || HTTP_STATUS.SERVER_ERROR).json({ success: false, error: err.message });
})

// start the server 
app.listen(PORT, ()=>{
  if(process.env.NODE_ENV !== 'production'){
    console.log(`Started listening on port [+]: ${PORT}`);
  }
});

module.exports = app;