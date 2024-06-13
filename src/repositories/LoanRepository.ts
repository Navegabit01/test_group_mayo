import Loan from '../entities/Loan';

export default interface LoanRepository {
    findById(id: string): Promise<Loan | null>;
    findByUserId(userId: string): Promise<Loan[]>;
    save(loan: Loan): Promise<Loan>;
    update(loan: Loan): Promise<Loan>;
}
