import BookRepository from '../repositories/BookRepository';
import Book from '../entities/Book';

export default class BookService {
    constructor(private bookRepository: BookRepository) {}

    async getBookById(id: string): Promise<Book | null> {
        return this.bookRepository.findById(id);
    }

    async getBookByTitle(title: string): Promise<Book | null> {
        return this.bookRepository.findByTitle(title);
    }

    async addBook(book: Book): Promise<Book> {
        return this.bookRepository.save(book);
    }

    async updateBook(book: Book): Promise<Book> {
        return this.bookRepository.update(book);
    }
}
