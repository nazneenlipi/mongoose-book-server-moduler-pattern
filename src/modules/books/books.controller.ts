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
    const data = await Books.find();

    res.status(201).json({
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
