// import { Request, Response } from "express";
// import Books from "../books/books.model";
// import Borrow from "./borrow.model";

//  const borrowBook = async (req: Request, res: Response) => {
//   try {
//     const { book, quantity, dueDate } = req.body;
//     const bookFind = await Books.findById(book);

//     if (!bookFind) {
//       return res.status(404).json({
//         success: false,
//         message: "Failed to find book",
//       });
//     }

//     if (bookFind.copies < quantity) {
//       return res.status(400).json({
//         success: false,
//         message: `Only ${bookFind.copies} copies available`,
//       });
//     }

//     const borrowRecord = await Borrow.create({
//       book,
//       quantity,
//       dueDate,
//     });

//     // Update copies
//     bookFind.copies -= quantity;
//     if (bookFind.copies === 0) {
//       bookFind.available = false;
//     }

//     await bookFind.save();

//     return res.status(201).json({
//       success: true,
//       message: "Book borrowed successfully",
//       data: borrowRecord,
//     });

//   } catch (error) {
//     console.error("Borrow Book Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to borrow book",
//       error: error instanceof Error ? error.message : error,
//     });
//   }
// };


import { Request, Response } from "express";
import Borrow from "./borrow.model";

export const createBorrow = async (req: Request, res: Response) => {
  const borrow = await Borrow.create(req.body);

  res.send({
    success: true,
    message: "Borrow books successfully ",
    data: borrow,
  });
};

export const getBorrow = async (req: Request, res: Response) => {
    const borrow = await Borrow.find();
     res.send({
    success: true,
    message: "Borrow books successfully ",
    data: borrow,
  });
}