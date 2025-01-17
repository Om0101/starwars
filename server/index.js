const express = require('express')
const cors = require('cors')
require('dotenv').config()
const characterRouter = require('./routes/starRouter')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(process.env.PUBLIC_DIR));
app.use('/api',characterRouter.router)


const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log("server started");
  });