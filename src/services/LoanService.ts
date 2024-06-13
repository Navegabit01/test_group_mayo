import LoanRepository from '../repositories/LoanRepository';
import Loan from '../entities/Loan';

export default class LoanService {
    constructor(private loanRepository: LoanRepository) {}

    async loanBook(userId: string, bookId: string): Promise<Loan> {
        const loanDate = new Date();
        const expectedReturnDate = new Date();
        expectedReturnDate.setDate(loanDate.getDate() + 14);

        const loan = new Loan('', userId, bookId, loanDate, null, expectedReturnDate);
        return this.loanRepository.save(loan);
    }

    async returnBook(loanId: string): Promise<Loan | null> {
        const loan = await this.loanRepository.findById(loanId);
        if (loan) {
            loan.returnDate = new Date();
            return this.loanRepository.update(loan);
        }
        return null;
    }

    async getUserLoans(userId: string): Promise<Loan[]> {
        return this.loanRepository.findByUserId(userId);
    }
}
