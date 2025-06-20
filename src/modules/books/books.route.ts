import { Router } from "express";
import { createBook, getBook } from "./books.controller";

const useRoute = Router()

useRoute.post("/books", createBook)
useRoute.get("/books", getBook)

export default useRoute