import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    author: string;
    year: number;
    genre: string;
    available: boolean;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    available: { type: Boolean, required: true },
});

const BookModel = mongoose.model<IBook>('Book', BookSchema);
export default BookModel;
