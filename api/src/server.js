require('dotenv').config({path: ('apiConfig.env')});
import express from 'express';
import cors from 'cors';
require('./config/database');
import userRouter from './modules/user/routes'

const port = process.env.SERVER_PORT;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/', (req, res) => {
    res.send('wellcome to quiz-tech API')
})

app.use('/api/user',  userRouter);

app.listen(port, console.log(`server started on port ${port}`));