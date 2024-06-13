import { Request, Response } from 'express';
import BookService from '../services/BookService';
import BookController from './BookController';
import Book from '../entities/Book';

jest.mock('../services/BookService');

describe('BookController', () => {
    let bookService: BookService;
    let bookController: BookController;
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: jest.Mock;

    beforeEach(() => {
        bookService = new BookService({} as any);  // Ensure correct instantiation
        bookController = new BookController(bookService);

        req = {
            params: {},
            body: {}
        };
        res = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis()
        };
        next = jest.fn();
    });

    describe('getBook', () => {
        it('should return a book if found', async () => {
            const book = new Book('1', 'Test Book', 'Test Author', 2023, 'Fiction', true);
            req.params = { id: '1' };
            (bookService.getBookById as jest.Mock).mockResolvedValue(book);

            await bookController.getBook(req as Request, res as Response, next);

            expect(bookService.getBookById).toHaveBeenCalledWith('1');
            expect(res.json).toHaveBeenCalledWith(book);
        });

        it('should return 404 if book not found', async () => {
            req.params = { id: '1' };
            (bookService.getBookById as jest.Mock).mockResolvedValue(null);

            await bookController.getBook(req as Request, res as Response, next);

            expect(bookService.getBookById).toHaveBeenCalledWith('1');
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Book not found' });
        });
    });

    describe('addBook', () => {
        it('should add a new book and return it', async () => {
            const book = new Book('', 'Test Book', 'Test Author', 2023, 'Fiction', true);
            const savedBook = new Book('1', 'Test Book', 'Test Author', 2023, 'Fiction', true);
            req.body = { title: 'Test Book', author: 'Test Author', year: 2023, genre: 'Fiction', available: true };
            (bookService.addBook as jest.Mock).mockResolvedValue(savedBook);

            await bookController.addBook(req as Request, res as Response, next);

            expect(bookService.addBook).toHaveBeenCalledWith(book);
            expect(res.json).toHaveBeenCalledWith(savedBook);
        });
    });
});
