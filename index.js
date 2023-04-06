const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');
//const Authroutes = require('./routes/auth-routes');

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());

//const connectDB = require('./database')();
require('dotenv').config();
mongoose
  .connect(
    process.env.Mongo_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("it has an error", err));

app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);
// app.use('/api', Authroutes.routes);

//app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));

app.listen(port, () => {
    console.log("server running successfully");
  });
  