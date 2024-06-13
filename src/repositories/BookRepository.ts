import Book from '../entities/Book';

export default interface BookRepository {
    findById(id: string): Promise<Book | null>;
    findByTitle(title: string): Promise<Book | null>;
    save(book: Book): Promise<Book>;
    update(book: Book): Promise<Book>;
}
