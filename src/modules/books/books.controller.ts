import { Request, Response } from "express";
import Books from "./books.model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const book = new Books(payload);
    const data = await book.save();

    res.status(201).json({
      success: true,
      message: "Books created successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create book",
      error,
    });
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    // const data = await Books.find().sort({ primaryField: 1, secondaryField: -1 }).limit(10);
    const data = await Books.find();

    res.status(200).json({
      success: true,
      message: "Books find successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to find book",
      error,
    });
  }
};

export const getBookByID = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const data = await Books.findById(bookId);

    res.status(200).json({
      success: true,
      message: "Books find successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to find book",
      error,
    });
  }
};

export const bookUpdate = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const updatedData = req.body;
    const data = await Books.findByIdAndUpdate(bookId, updatedData, { new: true,
    runValidators:true ,
     });

    res.status(200).json({
      success: true,
      message: "Books find successfully",
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to find book",
      error,
    });
  }
};
