import Loan from '../../entities/Loan';
import LoanRepository from '../LoanRepository';
import LoanModel, { ILoan } from '../../models/LoanModel';

class MongooseLoanRepository implements LoanRepository {
    async findById(id: string): Promise<Loan | null> {
        const loan: ILoan | null = await LoanModel.findById(id).lean();
        if (loan) {
            return new Loan(loan._id.toString(), loan.userId, loan.bookId, loan.loanDate, loan.returnDate, loan.expectedReturnDate);
        }
        return null;
    }

    async findByUserId(userId: string): Promise<Loan[]> {
        const loans: ILoan[] = await LoanModel.find({ userId }).lean();
        return loans.map(loan => new Loan(loan._id.toString(), loan.userId, loan.bookId, loan.loanDate, loan.returnDate, loan.expectedReturnDate));
    }

    async save(loan: Loan): Promise<Loan> {
        const newLoan = new LoanModel({
            userId: loan.userId,
            bookId: loan.bookId,
            loanDate: loan.loanDate,
            returnDate: loan.returnDate,
            expectedReturnDate: loan.expectedReturnDate,
        });
        await newLoan.save();
        return new Loan(newLoan._id.toString(), newLoan.userId, newLoan.bookId, newLoan.loanDate, newLoan.returnDate, newLoan.expectedReturnDate);
    }

    async update(loan: Loan): Promise<Loan> {
        const updatedLoan: ILoan | null = await LoanModel.findByIdAndUpdate(loan.id, {
            userId: loan.userId,
            bookId: loan.bookId,
            loanDate: loan.loanDate,
            returnDate: loan.returnDate,
            expectedReturnDate: loan.expectedReturnDate,
        }, { new: true }).lean();
        if (updatedLoan) {
            return new Loan(updatedLoan._id.toString(), updatedLoan.userId, updatedLoan.bookId, updatedLoan.loanDate, updatedLoan.returnDate, updatedLoan.expectedReturnDate);
        }
        return loan;
    }
}

export default MongooseLoanRepository;
