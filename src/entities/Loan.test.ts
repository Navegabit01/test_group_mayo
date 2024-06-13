import Loan from './Loan';

describe('Loan Entity', () => {
    it('should create a loan entity with the correct properties', () => {
        const id = '1';
        const userId = 'user1';
        const bookId = 'book1';
        const loanDate = new Date('2023-01-01');
        const returnDate = new Date('2023-01-15');
        const expectedReturnDate = new Date('2023-01-14');

        const loan = new Loan(id, userId, bookId, loanDate, returnDate, expectedReturnDate);

        expect(loan.id).toBe(id);
        expect(loan.userId).toBe(userId);
        expect(loan.bookId).toBe(bookId);
        expect(loan.loanDate).toBe(loanDate);
        expect(loan.returnDate).toBe(returnDate);
        expect(loan.expectedReturnDate).toBe(expectedReturnDate);
    });

    it('should create a loan entity with null returnDate', () => {
        const id = '1';
        const userId = 'user1';
        const bookId = 'book1';
        const loanDate = new Date('2023-01-01');
        const returnDate = null;
        const expectedReturnDate = new Date('2023-01-14');

        const loan = new Loan(id, userId, bookId, loanDate, returnDate, expectedReturnDate);

        expect(loan.id).toBe(id);
        expect(loan.userId).toBe(userId);
        expect(loan.bookId).toBe(bookId);
        expect(loan.loanDate).toBe(loanDate);
        expect(loan.returnDate).toBe(returnDate);
        expect(loan.expectedReturnDate).toBe(expectedReturnDate);
    });

    it('should have properties of the correct type', () => {
        const loan = new Loan('1', 'user1', 'book1', new Date('2023-01-01'), null, new Date('2023-01-14'));

        expect(typeof loan.id).toBe('string');
        expect(typeof loan.userId).toBe('string');
        expect(typeof loan.bookId).toBe('string');
        expect(loan.loanDate instanceof Date).toBe(true);
        expect(loan.returnDate === null || loan.returnDate instanceof Date).toBe(true);
        expect(loan.expectedReturnDate instanceof Date).toBe(true);
    });
});
