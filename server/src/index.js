import express from 'express';
import * as db from './database';
import api from './routers/api';

const app = express();

app.use(express.json());

app.use('/api', api);

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});
