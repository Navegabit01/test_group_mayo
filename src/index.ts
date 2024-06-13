import express from 'express';
import authMiddleware from './middlewares/authMiddleware';
import bookRouter from './routers/bookRouter';
import loanRouter from './routers/loanRouter';
import mongoose from 'mongoose';
import errorMiddleware from './middlewares/errorMiddleware';
import authRouter from './routers/authRouter';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRouter);
app.use('/books', authMiddleware, bookRouter); // Protect book routes
app.use('/loans', authMiddleware, loanRouter); // Protect loan routes

// Error handling middleware should be the last middleware
app.use(errorMiddleware);

mongoose.connect('mongodb://localhost/library')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
