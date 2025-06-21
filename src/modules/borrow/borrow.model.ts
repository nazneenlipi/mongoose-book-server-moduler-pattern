import { model, Schema } from "mongoose";
import { BorrowBooks } from "./borrow.interface";


const borrowSchema = new Schema<BorrowBooks>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: [true, "Book ID is required"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Borrow = model<BorrowBooks>("borrow" , borrowSchema)
export default Borrow