require('dotenv').config({path: ('apiConfig.env')});
const express =  require('express');
const cors= require('cors');
const app = express();

const port = process.env.SERVER_PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/', (req, res) => {
    res.send('wellcome to quiz-tech API')
})

app.listen(port, console.log(`server started on port ${port}`));