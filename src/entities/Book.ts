export default class Book {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public year: number,
        public genre: string,
        public available: boolean
    ) {}
}
