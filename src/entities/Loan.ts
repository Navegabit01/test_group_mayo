export default class Loan {
    constructor(
        public id: string,
        public userId: string,
        public bookId: string,
        public loanDate: Date,
        public returnDate: Date | null,
        public expectedReturnDate: Date
    ) {}
}
