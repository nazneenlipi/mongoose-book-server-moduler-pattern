import { Router } from "express";
import { createBorrow, getBorrow } from "./borrow.controller";


const borrowRoute = Router()

borrowRoute.post("/", createBorrow);
borrowRoute.get("/", getBorrow);

export default borrowRoute