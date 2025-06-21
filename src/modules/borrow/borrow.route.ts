import { Router } from "express";
import { createBorrow, getBorrowedBooksSummary, } from "./borrow.controller";


const borrowRoute = Router()

borrowRoute.post("/", createBorrow);
borrowRoute.get("/", getBorrowedBooksSummary);

export default borrowRoute