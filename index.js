const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
connectToMongo();
const app = express();
const port = process.env.BASE_URL;
app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
});