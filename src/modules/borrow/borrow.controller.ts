import { Request, Response } from "express";
import Borrow from "./borrow.model";

export const createBorrow = async (req: Request, res: Response) => {
  try {
    const borrow = new Borrow(req.body);
    await borrow.checkStock();

    //  Save borrow record
    await borrow.save();

    res.status(201).json({
      success: true,
      message: "Borrow books successfully",
      data: borrow,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Failed to borrow book",
      error: error.message,
    });
  }
};

export const getBorrow = async (req: Request, res: Response) => {
    const borrow = await Borrow.find();
     res.send({
    success: true,
    message: "Borrow books successfully ",
    data: borrow,
  });
}