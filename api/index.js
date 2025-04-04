const express =  require('express');
const app = express();
const cors = require('cors')

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json('test ok')
})

app.listen(4000);