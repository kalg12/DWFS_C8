const express = require('express');
const app = express();
const port = 4000
const ucamperRoutes = require('./src/routes/ucampers.routes')
const cors = require('cors')

//midlewares
app.use(express.json())
app.use(cors());


app.use('/api/v2/', ucamperRoutes)

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})