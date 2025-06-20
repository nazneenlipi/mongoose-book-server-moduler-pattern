import { Router } from "express";
import { bookDelete, bookUpdate, createBook, getBook, getBookByID } from "./books.controller";

const useRoute = Router()

useRoute.post("/books", createBook)
useRoute.get("/books", getBook)
useRoute.get("/books/:bookId", getBookByID)
useRoute.put("/books/:bookId", bookUpdate)
useRoute.delete("/books/:bookId", bookDelete)

export default useRoute