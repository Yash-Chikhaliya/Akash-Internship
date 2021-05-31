const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;
const uri = 'mongodb://localhost:27017/crud-database';

app.use(express.json());

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const userRouter = require('./routes/userRoute');

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})