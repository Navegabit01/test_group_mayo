import Book from './Book';

describe('Book Entity', () => {
    it('should create a book entity with the correct properties', () => {
        const id = '1';
        const title = 'Test Book';
        const author = 'Test Author';
        const year = 2023;
        const genre = 'Fiction';
        const available = true;

        const book = new Book(id, title, author, year, genre, available);

        expect(book.id).toBe(id);
        expect(book.title).toBe(title);
        expect(book.author).toBe(author);
        expect(book.year).toBe(year);
        expect(book.genre).toBe(genre);
        expect(book.available).toBe(available);
    });

    it('should have properties of the correct type', () => {
        const book = new Book('1', 'Test Book', 'Test Author', 2023, 'Fiction', true);

        expect(typeof book.id).toBe('string');
        expect(typeof book.title).toBe('string');
        expect(typeof book.author).toBe('string');
        expect(typeof book.year).toBe('number');
        expect(typeof book.genre).toBe('string');
        expect(typeof book.available).toBe('boolean');
    });
});
