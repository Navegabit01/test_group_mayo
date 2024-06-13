import { Router } from 'express';
import LoanService from '../services/LoanService';
import LoanController from '../controllers/LoanController';
import MongooseLoanRepository from '../repositories/mongoose/MongooseLoanRepository';

const loanRouter = Router();
const loanRepository = new MongooseLoanRepository();
const loanService = new LoanService(loanRepository);
const loanController = new LoanController(loanService);

loanRouter.post('/', (req, res) => loanController.loanBook(req, res));
loanRouter.post('/return', (req, res) => loanController.returnBook(req, res));
loanRouter.get('/:userId', (req, res) => loanController.getUserLoans(req, res));

export default loanRouter;
