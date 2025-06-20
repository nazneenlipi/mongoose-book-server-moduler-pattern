import { Router } from "express";
import { createBook, getBook, getBookByID } from "./books.controller";

const useRoute = Router()

useRoute.post("/books", createBook)
useRoute.get("/books", getBook)
useRoute.get("/books/:bookId", getBookByID)

export default useRoute