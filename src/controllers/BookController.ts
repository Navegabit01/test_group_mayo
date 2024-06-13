import { Request, Response } from 'express';
import BookService from '../services/BookService';
import Book from "../entities/Book";

export default class BookController {
    constructor(private bookService: BookService) {}

    async getBook(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const book = await this.bookService.getBookById(id);
        if (book) {
            return res.json(book);
        }
        return res.status(404).json({ message: 'Book not found' });
    }

    async addBook(req: Request, res: Response): Promise<Response> {
        const { title, author, year, genre, available } = req.body;
        const book = new Book('', title, author, year, genre, available);
        const newBook = await this.bookService.addBook(book);
        return res.json(newBook);
    }
}
