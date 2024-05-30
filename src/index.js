import express from 'express';
import cors from 'cors';
import projectRouter from './routes/projectRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/projects', projectRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});