import mongoose, { Schema, Document } from 'mongoose';

export interface ILoan extends Document {
    _id: mongoose.Types.ObjectId;
    userId: string;
    bookId: string;
    loanDate: Date;
    returnDate: Date | null;
    expectedReturnDate: Date;
}

const LoanSchema: Schema = new Schema({
    userId: { type: String, required: true },
    bookId: { type: String, required: true },
    loanDate: { type: Date, required: true },
    returnDate: { type: Date, required: false },
    expectedReturnDate: { type: Date, required: true },
});

const LoanModel = mongoose.model<ILoan>('Loan', LoanSchema);
export default LoanModel;
