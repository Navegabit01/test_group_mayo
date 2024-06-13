import { Request, Response } from 'express';
import LoanService from '../services/LoanService';

export default class LoanController {
    constructor(private loanService: LoanService) {}

    async loanBook(req: Request, res: Response): Promise<Response> {
        const { userId, bookId } = req.body;
        const loan = await this.loanService.loanBook(userId, bookId);
        return res.json(loan);
    }

    async returnBook(req: Request, res: Response): Promise<Response> {
        const { loanId } = req.body;
        const loan = await this.loanService.returnBook(loanId);
        if (loan) {
            return res.json(loan);
        }
        return res.status(404).json({ message: 'Loan not found' });
    }

    async getUserLoans(req: Request, res: Response): Promise<Response> {
        const { userId } = req.params;
        const loans = await this.loanService.getUserLoans(userId);
        return res.json(loans);
    }
}
