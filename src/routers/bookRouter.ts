import { Router } from 'express';
import BookService from '../services/BookService';
import BookController from '../controllers/BookController';
import MongooseBookRepository from '../repositories/mongoose/MongooseBookRepository';

const bookRouter = Router();
const bookRepository = new MongooseBookRepository();
const bookService = new BookService(bookRepository);
const bookController = new BookController(bookService);

bookRouter.get('/:id', (req, res) => bookController.getBook(req, res));
bookRouter.post('/', (req, res) => bookController.addBook(req, res));

export default bookRouter;
