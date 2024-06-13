import Book from '../../entities/Book';
import BookRepository from '../BookRepository';
import BookModel, { IBook } from '../../models/BookModel';

class MongooseBookRepository implements BookRepository {
    async findById(id: string): Promise<Book | null> {
        const book: IBook | null = await BookModel.findById(id).lean();
        if (book) {
            return new Book(book._id.toString(), book.title, book.author, book.year, book.genre, book.available);
        }
        return null;
    }

    async findByTitle(title: string): Promise<Book | null> {
        const book: IBook | null = await BookModel.findOne({ title }).lean();
        if (book) {
            return new Book(book._id.toString(), book.title, book.author, book.year, book.genre, book.available);
        }
        return null;
    }

    async save(book: Book): Promise<Book> {
        const newBook = new BookModel({
            title: book.title,
            author: book.author,
            year: book.year,
            genre: book.genre,
            available: book.available,
        });
        await newBook.save();
        return new Book(newBook._id.toString(), newBook.title, newBook.author, newBook.year, newBook.genre, newBook.available);
    }

    async update(book: Book): Promise<Book> {
        const updatedBook: IBook | null = await BookModel.findByIdAndUpdate(book.id, {
            title: book.title,
            author: book.author,
            year: book.year,
            genre: book.genre,
            available: book.available,
        }, { new: true }).lean();
        if (updatedBook) {
            return new Book(updatedBook._id.toString(), updatedBook.title, updatedBook.author, updatedBook.year, updatedBook.genre, updatedBook.available);
        }
        return book;
    }
}

export default MongooseBookRepository;
